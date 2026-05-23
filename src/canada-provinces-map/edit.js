/**
 * Edit function for the Canada Provinces Map block.
 * This component renders the block in the editor and provides the UI for editing its attributes.
 */

// Import React state hook for managing local editor state

import { useState } from '@wordpress/element';

// Import Gutenberg block utilities and editable rich text component

import { useBlockProps} from '@wordpress/block-editor';

// Import Gutenberg UI components used in the editor panel

import { 
	Button, 
	TextControl, 
	ToggleControl, 
	ColorPalette
} from '@wordpress/components';

// Import array of province names used for searching/filtering

import provinces from './provinces';

// Import SVG path data for each province to render the map
import provincePaths from './provincePaths';

/* Main edit function for the block, 
which renders the block in the editor and provides the UI for editing its attributes */

export default function Edit( { attributes, setAttributes } ) {
	const {
		title = 'Canada Provinces & Territories Map',
		provinceSearch = '',
		selectedProvinces = [],
		listTitle = 'Selected Provinces & Territories',
		showProvinceList = true,
		activeProvinceColor = '#16a34a',
		defaultProvinceColor = '#f9f9f9',
	} = attributes;

	const [ isEditing, setIsEditing ] = useState( false );

	// Calculate total number of provinces/territories for progress bar calculations (just to avoid hardcoding)
	const totalRegions = provinces.length;

	// Calculate total number of provinces/territories and percentage of selected provinces for progress bar display
	const selectedPercentage =
	totalRegions > 0
		? Math.round( ( selectedProvinces.length / totalRegions ) * 100 )
		: 0;

	// Function for filtering provinces based on search input and exclude already selected provinces
	const filteredProvinces = provinces.filter( ( province ) => 
		province.toLowerCase().includes( provinceSearch.toLowerCase() ) && !selectedProvinces.includes( province )
 	);

	/**
	 * Adds province to list if it does not exist, otherwise returns without adding.
	 * @param {*} provinceToAdd	 
	 * @returns 
	 */
	const addProvince = ( provinceToAdd ) => {
		if ( selectedProvinces.includes( provinceToAdd ) ) {
			return;
		}

	setAttributes( {
		selectedProvinces: [ ...selectedProvinces, provinceToAdd ],
		provinceSearch: '',
		} );
	};

	/**
	 * Removes a province from the selected provinces list.
	 * @param {*} provinceToRemove 
	 */

	const removeProvince = ( provinceToRemove ) => {
		setAttributes( {
			selectedProvinces: selectedProvinces.filter( ( province ) => 
				province !== provinceToRemove ),
		} );
	};

	// Main return statement that conditionally renders either the editing panel or the block preview based on isEditing state
	return (
		<div { ...useBlockProps() }>
			{ isEditing ? (
				<div className="maps-block-editor__panel">
					<div className="maps-block-editor-panel__header">
						Edit Map
					</div>

					{	/* Text control for editing the map title, which updates the title attribute on change */ }
					<TextControl
						label="Map Title"
						value={ title }
						onChange={ ( value ) => setAttributes( { title: value } ) }
					/>

					{ /* Text control for editing the title of the selected provinces list */ }
					<TextControl
						label="List Title"
						value={ listTitle }
						onChange={ ( value ) => setAttributes( { listTitle: value } ) }
					/>
					
					{ /* Toggle control for showing/hiding the selected provinces list in the block preview */ }
					<ToggleControl
						label="Show provinces & territories list"						
						checked={ showProvinceList }
						onChange={ ( value ) => setAttributes( { showProvinceList: value } ) }
					/>

					{ /* Text control for searching provinces to add to the selected provinces list */ }
					<TextControl
						label="Search provinces & territories"						
						value={ provinceSearch }
						onChange={ ( value ) => setAttributes( { provinceSearch: value } ) }
						placeholder="Type a province or territory name..."
					/>

					{ /* Dropdown that shows filtered provinces based on search input, 
					allowing users to click and add provinces to the selected list */ }

					{ provinceSearch && filteredProvinces.length > 0 && (
						<div className="maps-block-editor__dropdown">
							{ filteredProvinces.map( ( province ) => (
								<button
									key={ province }
									type="button"
									className="maps-block-editor__dropdown-item"
									onClick={ () =>
										addProvince( province )
									}
								>
									{ province }
								</button>
							) ) }
						</div>
					) }

					{ /* Button to clear all selected provinces at once */ }
					<button
						type="button"
						className="maps-block-editor__clear-provinces-button"
						onClick={() => setAttributes({ selectedProvinces: [] })}
					>
						Clear Provinces & Territories
					</button>

					{ /* Color palette controls for selecting the colors of active and inactive provinces on the map */ }
					<div className="maps-block-editor__color-row">
						{ /* Active province color picker */ }
						<div className="maps-block-editor__color-control">
							<p className="maps-block-editor__color-label">Selected Region Color</p>
							<ColorPalette
								value={activeProvinceColor}
								onChange={(color) =>
									setAttributes({ activeProvinceColor: color || '#16a34a' })
								}
							/>
						</div>
						
						{ /* Inactive province color picker */ }
						<div className="maps-block-editor__color-control">
							<p className="maps-block-editor__color-label">Unselected Region Color</p>
							<ColorPalette
								value={defaultProvinceColor}
								onChange={(color) =>
									setAttributes({ defaultProvinceColor: color || '#f9f9f9' })
								}
							/>
						</div>

					</div>

					{ /* List of selected provinces and their removal buttons */ }
					{ selectedProvinces.length > 0 && (
						<div className="maps-block-editor__selected-provinces">
							<h4>Selected Provinces & Territories</h4>
							<ul>
								{ selectedProvinces.map( ( province ) => (
									<li key={ province }>
										{ province }
										<button
											type="button"
											className="maps-block-editor__remove-button"
											onClick={ () => removeProvince( province ) }
										>
											x
										</button>
									</li>
								) ) }
							</ul>
						</div>
					) }

					{ /* Button for previewing the map with selected provinces highlighted
					 based on the current editor settings by switching isEditing state to false*/ }
					<div className="maps-block-editor-panel__actions">
						<Button
							variant="secondary"
							onClick={ () => setIsEditing( false ) }
						>
							Done
						</Button>
					</div>
				</div>

			) : (
				
				/* Block preview that shows the map with selected provinces highlighted and the list of selected provinces if enabled */
				<div className="maps-block-wrapper">
					<div className="maps-block">

						<h2 className="maps-block__tag">{ title }</h2>
						
						{ /* SVG map rendering with paths for each province, 
						where fill color is determined by whether the province is selected or not */ }

						<div className="maps-block__image-wrapper">
							<svg viewBox="0 440 800 595" preserveAspectRatio="xMidYMid meet">
								{provincePaths.map((province) => (
									<path
									key={province.id}
									id={province.id}
									data-name={province.name}
									className={`province ${selectedProvinces.includes(province.name) ? 'is-active' : ''}`}
									d={province.d}
									/* Apply active or default color based on whether the province is selected, 
									with a smooth transition defined in CSS */
									style={{
										fill: selectedProvinces.includes(province.name)
											? activeProvinceColor
											: defaultProvinceColor,
									}}
									/>
								))}
								</svg>
						</div>
					</div>
					
					{ /* Conditionally render the selected provinces list and progress bar if showProvinceList is true */ }
					{ showProvinceList && (
						<div className="maps-block-selected">
							<div className="maps-block-selected__header">

								{ /* Header section of the selected provinces list, showing the list title and count of selected provinces */ }
								<div className="maps-block-selected__header-main">
									<h3 className="maps-block-selected__title">
										{ listTitle || 'Selected Provinces & Territories' }
									</h3>
									<span className="maps-block-selected__count">
										{ selectedProvinces.length } selected
									</span>
								</div>

								{ /* Progress bar showing the percentage of selected provinces in bar and label */ }
								<div className="maps-block-selected__progress">
									<span>
										{ selectedProvinces.length } of { totalRegions } Provinces & Territories
									</span>
									<span>{ selectedPercentage }%</span>

									<div className="maps-block-selected__progress-bar">
										<div
											className="maps-block-selected__progress-fill"
											style={ {
												width: `${ selectedPercentage }%`,
											} }
										/>
									</div>
								</div>
							</div>

							{ /* Body of the selected provinces list, 
							showing either the list of selected provinces or a message if no provinces are selected */ }

							<div className="maps-block-selected__body">
								{ selectedProvinces.length > 0 ? (
									<div className="maps-block-selected__list">
										{ [ ...selectedProvinces ].sort().map( ( province ) => (
											<div key={ province } className="maps-block-selected__item">
												<span className="maps-block-selected__name">{ province }</span>
											</div>
										) ) }
									</div>
								) : (
									<p className="maps-block-selected__empty">
										No provinces or territories selected yet
									</p>
								) }
							</div>
						</div>
					) }

					{ /* Button to enter editing mode to modify the map and selected provinces */ }
					<div className="maps-block-box__actions">
						<Button
							variant="secondary"
							onClick={ () => setIsEditing( true ) }
						>
							Edit Map
						</Button>
					</div>
				</div>


			)}

			</div>
	);
}