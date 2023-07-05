import {} from '@radix-ui/react-icons'

const ProgressBar = ({ title="untitled", percent = 10, variant = 'bg-green-500'}) => {
	return (
		<div className="text-start py-4">
			<h1 className="text-xl font-mono my-2" >{title}</h1>
			<div className='h-3 w-full my-1 md:w-1/3 bg-gray-900 rounded-full overflow-hidden'>
				<div
					style={{ width: `${percent}%` }}
					className={`h-full ${variant}`}
				>
					
				</div>
			</div>
			<p className="text-end">{`${percent}%`}</p>
		</div>
	);
};

export default ProgressBar;