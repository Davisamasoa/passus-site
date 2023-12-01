import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

type Props = {
	dark: boolean | undefined;
	topic2?: string;
	img1?: string;
	img2?: string;
	img3?: string;
	img4?: string;
	firstText?: string;
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
	topic2,
	img1,
	img2,
	img3,
	img4,
	firstText,
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
			{firstText ? (
				<LazyMotion features={domAnimation}>
					<m.h1
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						initial={{ opacity: 0 }}
						transition={{ duration: 1.5, delay: 0 }}
						className={`mx-auto sm:px-headerPadding md:px-[25%] w-full px-4 pb-10 font-goudyOldStyle text-justify  sm:text-xl text-base ${
							dark ? "text-gray-400" : "text-gray-800"
						} `}
					>
						<p>{firstText}</p>
					</m.h1>
				</LazyMotion>
			) : undefined}
			{video ? (
				<LazyMotion features={domAnimation}>
					<m.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1.5 }}
						className="pb-10"
					>
						<video width="100%" controls autoPlay playsInline muted loop>
							<source src={video} />
						</video>
					</m.div>
				</LazyMotion>
			) : undefined}

			{img1 ? (
				<LazyMotion features={domAnimation}>
					<m.div
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						initial={{ opacity: 0 }}
						transition={{ duration: 1.5 }}
						className="pb-10 px-4 md:px-0"
					>
						<Image
							width={2000}
							height={2000}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
							className="image h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] object-cover"
							alt="a"
							src={img1}
						/>
					</m.div>
				</LazyMotion>
			) : undefined}

			{text1 ? (
				<LazyMotion features={domAnimation}>
					<m.h1
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						initial={{ opacity: 0 }}
						transition={{ duration: 1.5, delay: 0 }}
						className={`mx-auto sm:px-headerPadding md:px-[25%] w-full px-4 pb-10 font-goudyOldStyle text-justify  sm:text-xl text-base ${
							dark ? "text-gray-400" : "text-gray-800"
						} `}
					>
						<p>{text1}</p>

						{text2 ? <p className="pt-10">{text2}</p> : undefined}
					</m.h1>
				</LazyMotion>
			) : undefined}

			{topic2 ? (
				<LazyMotion features={domAnimation}>
					<m.h1
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						initial={{ opacity: 0 }}
						transition={{ duration: 1.5, delay: 0 }}
						className={`mx-auto sm:px-headerPadding md:px-[25%] w-full px-4 pb-10 font-goudyOldStyle text-justify  sm:text-2xl text-lg ${
							dark ? "text-white" : "text-black"
						} `}
					>
						{topic2}
					</m.h1>
				</LazyMotion>
			) : undefined}

			{img2 ? (
				<LazyMotion features={domAnimation}>
					<m.div
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						initial={{ opacity: 0 }}
						transition={{ duration: 1.5 }}
						className="pb-10 px-4 md:px-0"
					>
						<Image
							width={1300}
							height={850}
							className="image h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] object-cover"
							alt="a"
							src={img2}
						/>
					</m.div>
				</LazyMotion>
			) : undefined}
			{video2 ? (
				<LazyMotion features={domAnimation}>
					<m.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1.5 }}
						className="pb-10"
					>
						<video width="100%" controls autoPlay playsInline muted loop>
							<source src={video2} />
						</video>
					</m.div>
				</LazyMotion>
			) : undefined}

			{text3 ? (
				<LazyMotion features={domAnimation}>
					<m.h1
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						initial={{ opacity: 0 }}
						transition={{ duration: 1.5, delay: 0 }}
						className={`mx-auto sm:px-headerPadding md:px-[25%] w-full px-4 pb-10 font-goudyOldStyle text-justify  sm:text-xl text-base ${
							dark ? "text-gray-400" : "text-gray-800"
						} `}
					>
						<p>{text3}</p>

						{text4 ? <p className="pt-10">{text4}</p> : undefined}
						{text5 ? <p className="pt-10">{text5}</p> : undefined}
					</m.h1>
				</LazyMotion>
			) : undefined}
			{img3 ? (
				<LazyMotion features={domAnimation}>
					<m.div
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						initial={{ opacity: 0 }}
						transition={{ duration: 1.5 }}
						className="pb-10 px-4 md:px-0"
					>
						<Image
							width={2000}
							height={2000}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
							className="image h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] object-cover"
							alt="a"
							src={img3}
						/>
					</m.div>
				</LazyMotion>
			) : undefined}
			{carousel ? (
				<Carousel
					autoPlay={true}
					infiniteLoop={true}
					className="pb-10 px-4 md:px-0"
					showIndicators={false}
					showThumbs={false}
				>
					{carousel.map((src, index) => {
						return (
							<div key={index}>
								<img className="h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] object-cover" src={src} />
							</div>
						);
					})}
				</Carousel>
			) : undefined}
			{text6 ? (
				<LazyMotion features={domAnimation}>
					<m.h1
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						initial={{ opacity: 0 }}
						transition={{ duration: 1.5, delay: 0 }}
						className={`mx-auto sm:px-headerPadding md:px-[25%] w-full px-4 pb-10 font-goudyOldStyle text-justify  sm:text-xl text-base ${
							dark ? "text-gray-400" : "text-gray-800"
						} `}
					>
						<p>{text6}</p>
					</m.h1>
				</LazyMotion>
			) : undefined}

			{img4 ? (
				<LazyMotion features={domAnimation}>
					<m.div
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						initial={{ opacity: 0 }}
						transition={{ duration: 1.5 }}
						className="pb-10 px-4 md:px-0"
					>
						<Image
							width={2000}
							height={2000}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
							className="image h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] object-cover"
							alt="a"
							src={img4}
						/>
					</m.div>
				</LazyMotion>
			) : undefined}
		</div>
	);
}
