/* **
 * Save function for the Canadian Provinces Map block.
 * This component defines how the block's content is saved and rendered on the front end.
 *
 */

// Import Gutenberg block utilities for saving block content
import { useBlockProps } from '@wordpress/block-editor';

// Import SVG path data for each province to render the map
import provincePaths from './provincePaths';

// Main save function for the block, which defines how the block's content is saved and rendered on the front end
export default function save( { attributes } ) {
	const {
		title = 'Canada Provinces & Territories Map',
		selectedProvinces = [],
		listTitle = 'Selected Provinces & Territories',
		showProvinceList = true,
		activeProvinceColor = '#16a34a',
		defaultProvinceColor = '#f9f9f9'
	} = attributes;

	const totalRegions = provincePaths.length;

	const selectedPercentage =
		totalRegions > 0
			? Math.round( ( selectedProvinces.length / totalRegions ) * 100 )
			: 0;

	return (
		<div { ...useBlockProps.save() }>

			{/* Wrapper for the entire block content on the front end, 
			including the map and optional selected provinces list */ }

			<div className="maps-block-wrapper">
				<div className="maps-block">
					<h2 className="maps-block__tag">{ title }</h2>

					{/* SVG map rendering with paths for each province, 
					where selected provinces are filled with activeProvinceColor 
					and others with defaultProvinceColor */ }

					<div className="maps-block__image-wrapper">
						<svg viewBox="0 440 800 595" preserveAspectRatio="xMidYMid meet">
							{ provincePaths.map( ( province ) => (
								<path
									key={ province.id }
									id={ province.id }
									data-name={ province.name }
									className={ `province ${ selectedProvinces.includes( province.name ) ? 'is-active' : '' }` }
									d={ province.d }
									style={ {
										fill: selectedProvinces.includes( province.name )
											? activeProvinceColor
											: defaultProvinceColor,
									} }
								/>
							) ) }
						</svg>
					</div>
				</div>

				{/* Conditionally render the selected provinces list and progress bar if showProvinceList is true */ }

				{ showProvinceList && (
					<div className="maps-block-selected">
						<div className="maps-block-selected__header">
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
						showing either the list of selected provinces or a message if none are selected */ }
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
			</div>
		</div>
	);
}