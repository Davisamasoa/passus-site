import React, { ReactChild } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

type Props = {
	dark: boolean | undefined;
	img1?: string;
	img2?: string;
	img3?: string;
	text1?: string;
	text2?: string;
	text3?: string;
	text4?: string;
	text5?: string;
	text6?: string;
	video?: string | undefined;
	video2?: string | undefined;
	carousel?: string[];
};

export default function Work({
	dark,
	img1,
	img2,
	img3,
	text1,
	text2,
	text3,
	text4,
	text5,
	text6,
	video,
	video2,
	carousel,
}: Props) {
	return (
		<div
			className={`image-container relative block
			 mx-auto overflow-hidden md:px-[10%]  w-full lg:px-headerPaddingLG`}
		>
			{video ? (
				<motion.div
					initial={{ clipPath: "inset(5% 30% 5% 30%)" }}
					whileInView={{ clipPath: "inset(0 0 0 0)" }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				>
					<video width="100%" autoPlay muted playsInline loop controls>
						<source src={video} />
					</video>
				</motion.div>
			) : undefined}

			{img1 ? (
				<motion.div
					initial={{ clipPath: "inset(5% 30% 5% 30%)" }}
					whileInView={{ clipPath: "inset(0 0 0 0)" }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				>
					<Image
						width={2000}
						height={2000}
						className="image h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] object-cover"
						alt="a"
						src={img1}
					/>
				</motion.div>
			) : undefined}

			{text1 ? (
				<motion.h1
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					initial={{ opacity: 0 }}
					transition={{ duration: 1, delay: 0 }}
					className={`mx-auto sm:px-headerPadding md:px-[25%] py-10  w-full px-4 pb-10 font-goudyOldStyle text-justify  sm:text-xl text-base ${
						dark ? "text-gray-400" : "text-gray-800"
					} `}
				>
					<p>{text1}</p>

					{text2 ? <p className="pt-10">{text2}</p> : undefined}
				</motion.h1>
			) : undefined}
			{img2 ? (
				<motion.div
					initial={{ clipPath: "inset(5% 30% 5% 30%)" }}
					whileInView={{ clipPath: "inset(0 0 0 0)" }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				>
					<Image
						width={1300}
						height={850}
						className="image h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] object-cover"
						alt="a"
						src={img2}
					/>
				</motion.div>
			) : undefined}
			{video2 ? (
				<motion.div
					initial={{ clipPath: "inset(5% 30% 5% 30%)" }}
					whileInView={{ clipPath: "inset(0 0 0 0)" }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				>
					<video width="100%" autoPlay muted playsInline loop controls>
						<source src={video2} />
					</video>
				</motion.div>
			) : undefined}

			{text3 ? (
				<motion.h1
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					initial={{ opacity: 0 }}
					transition={{ duration: 1, delay: 0 }}
					className={`mx-auto sm:px-headerPadding md:px-[25%] py-10  w-full px-4 pb-10 font-goudyOldStyle text-justify  sm:text-xl text-base ${
						dark ? "text-gray-400" : "text-gray-800"
					} `}
				>
					<p>{text3}</p>

					{text4 ? <p className="pt-10">{text4}</p> : undefined}
					{text5 ? <p className="pt-10">{text5}</p> : undefined}
				</motion.h1>
			) : undefined}
			{img3 ? (
				<motion.div
					initial={{ clipPath: "inset(5% 30% 5% 30%)" }}
					whileInView={{ clipPath: "inset(0 0 0 0)" }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				>
					<Image
						width={2000}
						height={2000}
						className="image h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] object-cover"
						alt="a"
						src={img3}
					/>
				</motion.div>
			) : undefined}
			{text6 ? (
				<motion.h1
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					initial={{ opacity: 0 }}
					transition={{ duration: 1, delay: 0 }}
					className={`mx-auto sm:px-headerPadding md:px-[25%] py-10  w-full px-4 pb-10 font-goudyOldStyle text-justify  sm:text-xl text-base ${
						dark ? "text-gray-400" : "text-gray-800"
					} `}
				>
					<p>{text6}</p>
				</motion.h1>
			) : undefined}

			{carousel ? (
				<Carousel showThumbs={false} className="pb-10">
					{carousel.map((src, index) => {
						return (
							<div key={index}>
								<img className="h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] object-cover" src={src} />
							</div>
						);
					})}
				</Carousel>
			) : undefined}
		</div>
	);
}
