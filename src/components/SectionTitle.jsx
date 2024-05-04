/* eslint-disable react/prop-types */
function SectionTitle({ children }) {
	return (
		<div className="text-center space-y-4 first:*:font-bold first:*:text-main first:*:text-xl even:*:font-bold even:*:text-5xl last:*:max-w-screen-sm last:*:mx-auto mb-12">
			{children}
		</div>
	);
}

export default SectionTitle;
