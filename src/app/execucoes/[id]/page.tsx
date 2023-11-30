"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Work from "@/components/Work";
import { usePathname } from "next/navigation";

type Props = {};
type photoData = {
	dark?: boolean;
	author: string;
	topic: string;
	topic2?: string;
	img1?: string;
	img2?: string;
	img3?: string;
	img4?: string;
	video?: string;
	video2?: string;
	firstText?: string;
	text1?: string;
	text2?: string;
	text3?: string;
	text4?: string;
	text5?: string;
	text6?: string;
	carousel?: string[];
};

let delay = 0;

const workData: photoData[] = [
	{
		author: "Vinicius Poit",
		topic: "Respeito ao povo paulista.",
		img1: "/assets/image/trabalho/poit/poit.jpg",
		video2: "https://davisms.s3.sa-east-1.amazonaws.com/Vi%CC%81deo+-+Poit.mp4",
		firstText: "",
		text1:
			"Vinicius Poit, ex-candidato ao governo de São Paulo, apresentou estratégias centradas na eficiência da gestão pública, visando utilizar melhor os recursos em benefício do cidadão e incentivar o empreendedorismo como forma de impulsionar a economia e gerar oportunidades de emprego.",
		text2:
			"Sua visão proativa com o bem-estar da sociedade reflete sua busca por uma governança responsável e transparente, com foco no interesse coletivo e no progresso do Estado.",
		text3:
			"No cenário político, a má gestão de recursos públicos e o uso inadequado dos impostos prejudica todo o desenvolvimento do estado, afetando áreas essenciais como saúde, educação e infraestrutura.",
		text4:
			"Nossa proposta de comunicação foi inovadora e envolvente. Utilizando-se das redes sociais, criamos uma narrativa que aproximou Poit do público jovem e empreendedor. A Agência Passus se orgulha de ter sido parte deste projeto transformador, unindo inovação em comunicação com a visão progressista de Vinicius Poit.",
		carousel: [
			"/assets/image/trabalho/poit/1.jpg",
			"/assets/image/trabalho/poit/2.jpg",
			"/assets/image/trabalho/poit/3.jpg",
			"/assets/image/trabalho/poit/4.jpg",
			"/assets/image/trabalho/poit/5.jpg",
			"/assets/image/trabalho/poit/6.jpg",
			"/assets/image/trabalho/poit/7.jpg",
			"/assets/image/trabalho/poit/8.jpg",
			"/assets/image/trabalho/poit/10.jpg",
			"/assets/image/trabalho/poit/11.jpg",
			"/assets/image/trabalho/poit/12.jpg",
			"/assets/image/trabalho/poit/13.jpg",
			"/assets/image/trabalho/poit/14.jpg",
			"/assets/image/trabalho/poit/15.jpg",
			"/assets/image/trabalho/poit/16.jpg",
			"/assets/image/trabalho/poit/17.jpg",
			"/assets/image/trabalho/poit/18.jpg",
			"/assets/image/trabalho/poit/19.jpg",
			"/assets/image/trabalho/poit/20.jpg",
			"/assets/image/trabalho/poit/21.jpg",
			"/assets/image/trabalho/poit/22.jpg",
			"/assets/image/trabalho/poit/23.jpg",
			"/assets/image/trabalho/poit/24.jpg",
			"/assets/image/trabalho/poit/25.jpg",
			"/assets/image/trabalho/poit/26.jpg",
			"/assets/image/trabalho/poit/27.jpg",
			"/assets/image/trabalho/poit/28.jpg",
			"/assets/image/trabalho/poit/29.jpg",
		],
	},

	{
		img1: "/assets/image/trabalho/Miss – Beleza nacional.jpg",
		author: "Miss Universo Brasil",
		topic: "Beleza nacional",
	},
	{
		dark: true,
		video: "https://davisms.s3.sa-east-1.amazonaws.com/programa4x4.mp4",
		text1:
			"O jornalismo é uma poderosa ferramenta para a promoção de informação e construção de uma sociedade engajada. No entanto, nem todos seguem uma abordagem responsável e imparcial. Muitas produções acabam prejudicando a busca pela verdade e comprometendo a qualidade das informações.",
		text2:
			"Apesar disso, há programas que se destacam pela excelência em sua abordagem jornalística, como o Programa 4 por 4, que reúne os maiores nomes do jornalismo independente para debates embasados sobre temas políticos e sociais.",
		img2: "/assets/image/trabalho/programa4x4/1.jpg",
		text3:
			"Essa estratégia é feita a partir de diferentes perspectivas, o que permite que os telespectadores tenham acesso a informações fundamentadas. Apresentado por Luis Ernesto Lacombe, Ana Paula Henkel, Rodrigo Constantino e Guilherme Fiuza, o programa ao vivo conseguiu grande relevância.",
		text6:
			"A Agência Passus participou da concepção do branding, do lançamento e da estratégia digital. Com quase 900 mil inscritos no YouTube, cerca de 700 mil seguidores em redes sociais e altas médias de visualizações, o Programa 4 por 4 se tornou um destaque nas suas transmissões ao vivo aos domingos.",
		img3: "/assets/image/trabalho/programa4x4/2.jpg",
		img4: "/assets/image/trabalho/programa4x4/3.jpg",
		author: "Programa 4x4",
		topic: "Jornalismo sério e independente",
		topic2: "Jornalismo sério e independente",
	},
	{
		dark: true,
		video: "https://davisms.s3.sa-east-1.amazonaws.com/tarcisio.mp4",
		text1:
			"São Paulo enfrenta desafios significativos em termos de segurança pública, saúde e educação, fatores que influenciam diretamente na qualidade de vida de seus moradores.",
		text2:
			"Tarcísio de Freitas, ex-Ministro da Infraestrutura e atual Governador de São Paulo, teve como principal objetivo trazer a esperança de volta aos paulistanos. Estratégias de políticas públicas e a relação de sua figura técnica e comprometida foram a escolha de 13 milhões de pessoas",
		img2: "/assets/image/trabalho/Tarcísio de Freitas.jpg",
		text3:
			"A proposta da Agência Passus para esse trabalho se pautou em humanizar a figura de Tarcísio, aproximando-o da realidade dos cidadãos. Por meio de vídeos e fotografias de alta qualidade, retratamos momentos genuínos do pré-candidato em interações cotidianas e reuniões estratégicas.",
		carousel: [
			"/assets/image/trabalho/tarcisio/1.jpg",
			"/assets/image/trabalho/tarcisio/2.jpg",
			"/assets/image/trabalho/tarcisio/3.jpg",
			"/assets/image/trabalho/tarcisio/4.jpg",
			"/assets/image/trabalho/tarcisio/5.jpg",
			"/assets/image/trabalho/tarcisio/6.jpg",
			"/assets/image/trabalho/tarcisio/7.jpg",
		],
		text6:
			"Com uma linguagem contemporânea e dinâmica, a comunicação foi projetada para alcançar e engajar diversas faixas etárias, ressaltando o caráter inovador da campanha e a visão de futuro de Tarcísio para São Paulo.",
		author: "Tarcísio de Freitas",
		topic: "Jornada por São Paulo",
	},
	{
		dark: true,
		author: "Jovem Pan e Brasil 200",
		topic: "Contra a Fome na pandemia.",
		img1: "/assets/image/trabalho/Jovem Pan e Brasil 200.jpeg",
		img2: "/assets/image/trabalho/Jovem Pan e Brasil 200.jpeg",
		img3: "/assets/image/trabalho/Jovem Pan e Brasil 200.jpeg",
		text1:
			"No contexto da pandemia de COVID-19, a sociedade enfrentou momentos extremamente desafiadores, onde muitas pessoas se viram em situações de extrema vulnerabilidade e necessidade.",
		text2:
			"A crise sanitária e econômica gerou um impacto significativo, deixando diversas famílias e comunidades em situação precária e carentes de auxílio.",
		text3:
			"Frente a esse cenário delicado, o Instituto Brasil 200 e a rádio Jovem Pan uniram esforços para realizar uma ação de amparo e assistência às pessoas que mais necessitavam de ajuda durante a pandemia.",
		text4:
			"Com o objetivo de proporcionar apoio e alívio para os mais afetados pela crise, a iniciativa promoveu uma série de ações solidárias, abraçando e apoiando comunidades em diversas localidades.",
		text6:
			"Com mais de 1 milhão de reais arrecadados, 20 mil cestas básicas e 80 mil pessoas beneficiadas, a campanha foi referência de arrecadação na pandemia.",
	},
	{
		dark: true,
		author: "Aldo Rebelo",
		topic: "Uma vida dedicada à política.",
		img1: "/assets/image/trabalho/Aldo Rebelo.jpg",
		img2: "/assets/image/trabalho/Aldo Rebelo.jpg",
		text1:
			"Desde o início de sua trajetória política, Aldo Rebelo se destacou como um nome comprometido com o desenvolvimento e a soberania do Brasil. Atuante em diversos cargos ao longo de sua carreira, Aldo acumulou experiência em funções significativas: foi Ministro da Coordenação Política e Assuntos Institucionais, Ministro dos Esportes, Ministro da Ciência, Tecnologia e Inovação, e Ministro da Defesa.",
		text2:
			"Além desses importantes cargos ministeriais, destacou-se também como Presidente da Câmara dos Deputados. Sua capacidade de diálogo e construção de pontes com diferentes correntes políticas sempre foi um de seus maiores trunfos.",
		text3: "O projeto nacionalista.",
		text4:
			"Agora, pelo PDT, Aldo Rebelo pleiteou uma vaga no Senado Federal, trazendo uma proposta de candidatura que busca conciliar desenvolvimento econômico com justiça social. Sua campanha foca na garantia dos direitos dos trabalhadores, na promoção de políticas trabalhistas e na defesa de um Brasil que valorize a ideia de nação soberana.",
	},
	{
		dark: true,
		author: "Ashby",
		topic: "3 décadas de sabor.",
		img1: "/assets/image/trabalho/ashby.jpg",
		img2: "/assets/image/trabalho/ashby.jpg",
		img3: "/assets/image/trabalho/ashby.jpg",
		text1:
			"A Cervejaria Ashby, com sua trajetória consolidada no segmento de cervejas artesanais, tem se destacado por décadas por sua cerveja de sabor premiado e pela sua dedicação em oferecer ao consumidor uma experiência singular.",
		text2:
			"Reconhecendo a importância estratégica da comunicação eficaz no cenário competitivo atual, a Ashby buscou uma parceria que pudesse alavancar ainda mais sua presença de marca no mercado.",
		text3:
			"Neste cenário, a Agência Passus foi selecionada para ser a responsável por elaborar e implementar uma estratégia de comunicação abrangente para a cervejaria.",
		text4:
			"A comunicação busca enfatizar a excelência e tradição da Ashby, utilizando-se de uma linguagem sofisticada e canais de comunicação apropriados para o segmento.",
	},
	{
		img1: "/assets/image/trabalho/Credal.jpg",
		author: "Credal Bank",
		topic: "Crédito para todos",
	},
	{
		img1: "/assets/image/trabalho/Rubinho Nunes.jpg",
		text1:
			"Na política brasileira, é inegável que já enfrentamos enormes desafios, incluindo escândalos de corrupção, falta de incentivo ao empreendedorismo e uma excessiva burocratização. Tudo isso acaba dificultando o desenvolvimento econômico e social do nosso país.",
		text2:
			"Em meio a isso, o vereador e um dos cofundadores do MBL (Movimento Brasil Livre), Rubinho Nunes, se posicionou como uma voz ativa na luta contra a corrupção.",
		topic2: "Força para defender, ousadia para enfrentar.",
		img2: "/assets/image/trabalho/Rubinho Nunes.jpg",
		text3:
			"Sua atuação busca incentivar o empreendedorismo e proporcionar um ambiente mais favorável ao desenvolvimento socioeconômico do Brasil, apoiando todos os empreendedores que desejam trabalhar de forma honesta.",
		text4:
			"Com uma comunicação dinâmica, jovem, de alta retenção em redes e muito digital, a Passus trabalhou na concepção estratégica, tráfego, captação de leads e na estrutura de comunicação da campanha eleitoral de 2020.",
		author: "Rubinho Nunes",
		topic: "São mais justa e livre",
	},
	{
		dark: true,
		author: "Brasil 200",
		topic: "O segundo grito de liberdade",
		img1: "/assets/image/trabalho/Brasil 200.jpg",
		img2: "/assets/image/trabalho/Brasil 200.jpg",
		img3: "/assets/image/trabalho/Brasil 200.jpg",
		text1:
			"Durante sua história o Brasil vem sistematicamente lutando para ser o país do presente. Passados inúmeros governos, o país do amanhã nunca se tornou o país do hoje. Golpes, revoluções, promessas, escândalos… estamos sempre correndo atrás dos prejuízos e não indo no rumo do desenvolvimento.",
		text3:
			"Liderados por grandes empresários da economia nacional, como Flávio Rocha e Gabriel Kanner (Riachuelo), Sebastião Bonfim (Centauro), Edgar Corona (Smartfit), João Apolinário (Polishop) e vários outros, um projeto audacioso de construir o segundo grito de independência foi criado. Duzentos anos depois do grito às margens do Rio Ipiranga, um manifesto rumo à prosperidade foi formado.",
	},
	{
		author: "Patriota",
		topic: "Patriotismo como unidade nacional.",
		img1: "/assets/image/trabalho/patriota.jpg",
		img2: "/assets/image/trabalho/patriota.jpg",
		text1:
			"O PATRIOTA, como um partido político, é reconhecidamente conservador, defensor do livre-mercado e cristão.",
		text2:
			"Para comunicar esses aspectos da identidade, essência e os princípios do PATRIOTA de maneira visualmente impactante e com uma mensagem concisa e que não se confundisse entre os vários outros partidos com inclinações para o mesmo eleitorado, a Agência Passus trabalhou na criação de uma mensagem de semelhança com o eleitor.",
		text3:
			"Nosso objetivo primordial era desenvolver uma identidade que refletisse de maneira abrangente todos os valores e ideais do partido, ao mesmo tempo que transmitisse uma linguagem firme, clara e distintiva, ressaltando os seus diferenciais.",
	},
	{
		dark: true,
		author: "ARCAH",
		topic: "I believe in good people",
		img1: "/assets/image/trabalho/ARCAH .jpeg",
		img2: "/assets/image/trabalho/ARCAH .jpeg",
		text1:
			"Em nossa recente parceria, tivemos o privilégio de trabalhar com a ARCAH, uma organização que, desde sua fundação, tem se dedicado a reintegrar socialmente pessoas em situação de rua.",
		text2:
			"Com uma biografia repleta de histórias transformadoras, a ARCAH não só oferece um lar temporário, mas também capacitação, visando dar uma segunda chance a quem mais precisa. Sua missão? Resgatar a dignidade e proporcionar um novo começo para aqueles que perderam tudo.",
		text3: "Falar para sensibilizar.",
		text4:
			"Ao mergulharmos profundamente na essência da ARCAH, percebemos a necessidade de uma comunicação que tocasse corações e transcendesse números. Adotamos uma proposta de comunicação que valoriza histórias reais, humanizando cada experiência e tornando tangível o impacto positivo da organização.",
		text5:
			"Conseguimos, juntos, ampliar a visibilidade da ARCAH, atraindo mais apoio e solidariedade de toda a comunidade. É a prova de que, quando marketing e causas nobres se encontram, transformações reais acontecem.",
	},
	{
		dark: true,
		author: "B-ON",
		topic: "Consciência, Qualidade e Sabor em Cada Escolha.",
		img1: "/assets/image/trabalho/B-ON saudável.jpg",
		img2: "/assets/image/trabalho/B-ON saudável.jpg",
		text1:
			"A B-ON Saudável consolidou-se no mercado de alimentos como um farol em meio à vastidão de produtos ultraprocessados. Defendendo a saúde e bem-estar de seus consumidores, a empresa fornece uma gama de alimentos saborosos e ricos em nutrientes.",
		text2:
			"O objetivo era reinventar o conceito de “comida pronta”, provando que rapidez e saúde podem, sim, compartilhar a mesma embalagem.",
		text3:
			"O objetivo era reinventar o conceito de “comida pronta”, provando que rapidez e saúde podem, sim, compartilhar a mesma embalagem.",
		text4:
			"A Agência Passus elaborou uma campanha centrada em três pilares fundamentais: rastreabilidade, qualidade e saúde. A mensagem era clara: ao optar pela B-ON Saudável, os consumidores estavam não só escolhendo uma opção saudável, mas também garantindo transparência sobre a origem dos alimentos e sua qualidade superior.",
		text6:
			"A parceria entre a B-ON Saudável e a Agência Passus redefiniu padrões, transformando a percepção do público sobre o que significa verdadeiramente consumir de forma consciente e saudável",
	},
	{
		img1: "/assets/image/trabalho/Pamplona Alimentos .jpg",
		text1:
			"Nem todas as empresas alimentícias estão verdadeiramente comprometidas com a preocupação em fornecer alimentos de qualidade, especialmente quando se trata de carne suína. Com frequência, os padrões de produção e os interesses comerciais prevalecem, colocando em segundo plano o bem-estar dos animais e a excelência do produto final.",
		text2:
			"Contudo, a Pamplona Alimentos é uma exceção notável nesse cenário desde 1948. A empresa dedica-se a levar para as famílias as melhores carnes suínas, com um compromisso sólido de tradição e qualidade.",
		img2: "/assets/image/trabalho/Pamplona Alimentos .jpg",
		text3:
			"A Pamplona se destaca pela sua cuidadosa integração ao meio ambiente, promovendo uma alimentação saudável, responsável e sustentável.",
		text4:
			"Com a criação de peças que evidenciavam toda a tradição e qualidade da Pamplona, a Agência Passus trabalhou para estabelecer uma relação ainda maior de confiança com os produtos Pamplona.",
		author: "Pamplona Alimentos",
		topic: "Sabor e tradição",
	},
	{
		dark: true,
		author: "Michel Temer e Maurício Macri",
		topic: "Conferência pela Liberdade",
		img1: "/assets/image/trabalho/Temer-e-macri.jpg",
		img2: "/assets/image/trabalho/Temer-e-macri.jpg",
		img3: "/assets/image/trabalho/Temer-e-macri.jpg",
		text1:
			"A Conferência Internacional da Liberdade tornou-se um espaço vital para discussões relevantes no cenário global, contando com a participação de personalidades marcantes, como os ex-presidentes Maurício Macri e Michel Temer.",
		text2:
			"O evento, repleto de debates e trocas construtivas sobre liberdade, confiou à Agência Passus a tarefa de registrar esses momentos.",
		text3:
			"A equipe da Agência Passus adotou uma abordagem que unia fotografia e vídeo, buscando capturar a essência das discussões e os momentos mais significativos do evento.",
		text4:
			"Através deste trabalho, foi possível documentar a conferência e criar um registro visual que serviu como ponto de referência para quem queria reviver ou conhecer os destaques da ocasião.",
	},
	{
		dark: true,
		author: "Campanha pela Reforma Tributária",
		topic: "Brasil próspero e justo.",
		img1: "/assets/image/trabalho/Campanha Reforma Tributária.jpg",
		img2: "/assets/image/trabalho/Campanha Reforma Tributária.jpg",
		text1:
			"Em 2020 uma das discussões mais importantes do país era a composição de uma proposta de Reforma Tributária. Algumas entidades e grupos se posicionaram em apoio a desoneração da folha de pagamentos como medida para aliviar a carga tributária sobre as empresas e estimular o emprego e o crescimento econômico.",
		text2:
			"Diante dessa conjuntura, diversas entidades que compartilham das mesmas ideias se uniram para promover debates e discussões a respeito dessas questões sensíveis. O movimento reúne representantes de diferentes setores da economia e visa aprofundar soluções que atendam aos interesses e necessidades de todos os envolvidos.",
		text3:
			"A Agência Passus foi escolhida para criar peças publicitárias e ajudar com que essas visões fossem presença marcada no debate público, pautando outras vozes e fazendo com que as pessoas pudessem compreender visões que, para muitos, são puramente técnicas.",
	},
	{
		img1: "/assets/image/trabalho/Behind The Crown - o que há por trás da coroa.jpg",
		author: "Behind the Crown",
		topic: "O que há por trás da coroa",
	},
	{
		img1: "/assets/image/trabalho/Miss Universo Brasil Tour.jpg",
		author: "SoulTV",
		topic: "Um streaming para todos",
	},
	{
		author: "Miss Universo 2022",
		topic: "Miss Universo Brasil Tour",
		img1: "/assets/image/trabalho/Miss Universo Brasil Tour.jpg",
		img2: "/assets/image/trabalho/Miss Universo Brasil Tour.jpg",
		text1:
			"Na televisão, é essencial contar com espaços dedicados ao público feminino, que ofereçam dicas, cuidados e programas que valorizam e enaltecem a mulher em todas as suas facetas.",
		text2:
			"Essa representação na mídia promove a diversidade e a igualdade, além de fornecer informações que atendam aos interesses e necessidades do público feminino.",
		text3:
			"UMiss se destaca com a proposta. O canal não apenas aborda temas voltados à mulher, como beleza, moda e bem-estar, mas também produz uma série dedicada ao universo das misses, destacando a importância dessas mulheres como agentes de mudança e inspiração.",
		text4:
			"A estratégia aqui é criar um ambiente representativo que proporciona conteúdos enriquecedores para toda a audiência. A Passus é a agência de todos os programas do canal UMiss. ",
	},
	{
		img1: "/assets/image/trabalho/Vodka Tiiv.jpg",
		text1:
			"A Tiiv é vanguarda. A pioneira no Brasil a produzir vodka orgânica, adotando padrões rigorosos que a colocam como uma das poucas no mundo a seguir tais critérios. Sua estratégia vai além de simplesmente oferecer um destilado; a Tiiv não só carrega em sua composição ingredientes naturais de qualidade superior, mas também o espírito de inovação e sustentabilidade.",
		topic2: "Inspiração russa e alma brasileira",
		text3:
			"Com a promessa de entregar uma experiência premium aos apreciadores de vodka, esta marca emergente destaca-se pelo seu compromisso com o meio ambiente e a produção consciente, proporcionando ao consumidor uma bebida livre de agrotóxicos e substâncias prejudiciais.",
		text4:
			"A proposta de comunicação desenvolvida pela Agência Passus para a Vodka Tiiv foi meticulosamente pensada para refletir a qualidade, principalmente como base para drinks de alta coquetelaria.",
		author: "Vodka Tiiv",
		topic: "Thanks it is vodka",
	},
	{
		author: "CASP",
		topic: "Uma história de parceria com o campo.",
		img1: "/assets/image/trabalho/CASP.jpg",
		img2: "/assets/image/trabalho/CASP.jpg",
		text1:
			"No competitivo cenário do agronegócio, muitas empresas enfrentam desafios para transmitir segurança, transparência e qualidade em suas operações. Esses pilares são fundamentais para os produtores, que buscam parcerias confiáveis e eficientes para impulsionar seus negócios.",
		text2:
			"Em meio a esse contexto, a CASP se destaca como uma verdadeira pioneira em máquinas e equipamentos. A empresa se firmou há décadas com a missão de redefinir o padrão, oferecendo soluções tecnologicamente avançadas, seguras e transparentes - além de compartilhar conhecimentos e oferecer suporte para auxiliar os produtores na tomada de decisões estratégicas.",
		text3:
			"Com a parceria firmada com a Agência Passus, a CASP vislumbrou uma oportunidade de elevar ainda mais seu nome no mercado. A proposta de comunicação desempenhada pela Passus focou em reforçar os valores da empresa, destacando sua expertise técnica e compromisso com a sustentabilidade.",
	},
	{
		author: "Aurapharma",
		topic: "A vida é prioridade. Sempre.",
		img1: "/assets/image/trabalho/Aurapharma.jpg",
		img2: "/assets/image/trabalho/Aurapharma.jpg",
		text1:
			"Em um cenário onde o uso da Cannabis Medicinal é uma necessidade para muitas pessoas que enfrentam doenças neurológicas, a realidade brasileira ainda se mantém com desafios de comunicação que dificultam o debate correto do tema.",
		text2:
			"Porém, com o objetivo de transformar essa situação e proporcionar um acesso eficiente àqueles que precisam, surge a CBDMED, uma importadora e distribuidora de remédios e produtos à base de CBD.",
		text3:
			"A essência da CBDMED reside na missão de suprir o mercado brasileiro com produtos de alta qualidade e comprovada eficácia, respaldados por reconhecimento internacional.",
		text4:
			"Nossa parceria com a Aura Pharma teve como objetivo primordial promover uma compreensão firme sobre o potencial da Cannabis medicinal, destacando sua relevância como uma alternativa valiosa, assim como outros remédios da indústria farmacêutica. Além disso, enfatizamos a importância de seguir protocolos seguros e transparentes, sempre respaldados por artigos científicos e estudos clínicos de alta qualidade.",
	},
	{
		img1: "/assets/image/trabalho/Miss Universo Brasil Tour.jpg",
		author: "CBDMED",
		topic: "CBD é saúde",
	},
	{
		dark: true,
		author: "UMiss",
		topic: "Tudo sobre o universo feminino",
		img1: "/assets/image/trabalho/Miss Universo Brasil Tour.jpg",
		img2: "/assets/image/trabalho/Miss Universo Brasil Tour.jpg",
		text1:
			"Na televisão, é essencial contar com espaços dedicados ao público feminino, que ofereçam dicas, cuidados e programas que valorizam e enaltecem a mulher em todas as suas facetas.",
		text2:
			"Essa representação na mídia promove a diversidade e a igualdade, além de fornecer informações que atendam aos interesses e necessidades do público feminino.",
		text3:
			"UMiss se destaca com a proposta. O canal não apenas aborda temas voltados à mulher, como beleza, moda e bem-estar, mas também produz uma série dedicada ao universo das misses, destacando a importância dessas mulheres como agentes de mudança e inspiração.",
		text4:
			"A estratégia aqui é criar um ambiente representativo que proporciona conteúdos enriquecedores para toda a audiência. A Passus é a agência de todos os programas do canal UMiss. ",
	},
];

function removeAccents(word: string) {
	return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export default function Page({}: Props) {
	const pathname = usePathname();

	const findIndexByAuthor = (dataArray: photoData[], authorName: string): number => {
		const index = dataArray.findIndex(
			(item) =>
				item.author
					.normalize("NFD")
					.replace(/[\u0300-\u036f]/g, "")
					.toLowerCase()
					.replaceAll("-", " ") === authorName
		);
		return index;
	};

	const position = findIndexByAuthor(workData, pathname.replace("/execucoes/", "").replaceAll("-", " "));

	return (
		<>
			<motion.main
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				initial={{ opacity: 0 }}
				transition={{ duration: 1.5 }}
				className={`${workData[position]?.dark ? "text-white" : "text-gray-800"}`}
			>
				<h1
					className={`sm:gap-5 md:px-[10%]  w-full lg:px-headerPaddingLG px-headerPadding font-goudyOldStyle text-center md:text-start text-xs md:text-sm leading-6 ${
						workData[position]?.dark ? "text-gray-400" : "text-gray-800"
					} `}
				>
					{workData[position]?.author}
				</h1>

				<h1 className="sm:gap-5 md:px-[10%]  w-full lg:px-headerPaddingLG px-headerPadding pb-10 font-goudyOldStyle sm:text-3xl md:text-4xl text-2xl leading-6 text-center md:text-start -mt-1">
					{workData[position]?.topic}
				</h1>
				<Work
					dark={workData[position]?.dark}
					topic2={workData[position]?.topic2}
					img1={workData[position]?.img1}
					img2={workData[position]?.img2}
					img3={workData[position]?.img3}
					img4={workData[position]?.img4}
					firstText={workData[position]?.firstText}
					text1={workData[position]?.text1}
					text2={workData[position]?.text2}
					text3={workData[position]?.text3}
					text4={workData[position]?.text4}
					text5={workData[position]?.text5}
					text6={workData[position]?.text6}
					video={workData[position]?.video}
					video2={workData[position]?.video2}
					carousel={workData[position]?.carousel}
				/>
			</motion.main>
		</>
	);
}
