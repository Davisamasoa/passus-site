type Props = {};

export default function Footer({}: Props) {
	return (
		<footer className="min-h-[32vh] bg-zinc-800 flex justify-start items-center lg:px-80 md:px-20 sm:px-7">
			<div className="flex gap-14 sm:gap-24 text-[12px] sm:text-[13px] text-zinc-400 tracking-tight flex-wrap py-14 px-7 md:px-0">
				<ul className="flex flex-col gap-1">
					<li className="text-white">Carrers</li>
					<li>Job opportunities</li>
					<li>Out people</li>
					<li>Working at AKQA</li>
					<li>Qualities we look for</li>
				</ul>
				<ul className="flex flex-col gap-1">
					<li className="text-white">Community</li>
					<li>AKQA Insight</li>
					<li>Future Lions</li>
					<li>Perspectives</li>
					<li>AKQA Group</li>
				</ul>
				<ul className="flex flex-col gap-1">
					<li className="text-white">About</li>
					<li>News</li>
					<li>Studios</li>
					<li>Sustainability</li>
					<li>Privacy Policy</li>
				</ul>
			</div>
		</footer>
	);
}
