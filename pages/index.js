import Head from 'next/head'
import SocialFooter from "../components/SocialFooter";
import React, {useRef, useEffect, useState} from 'react';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import BoxCurve from "../components/BoxCurve";
import BlackBox from "../components/BlackBox";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



// import Image from 'next/image'
export async function getStaticProps() {
    const socialData = [
        {
            image: '/images/telegram.png',
            title: 'Telegram',
            link: '',
            head: 'Join us on',
            size: 'mr-6'
        }, {
            image: '/images/twitter.png',
            title: 'Twitter',
            link: '',
            head: 'Join us on',
            size: 'mr-6'
        }, {
            image: '/images/youtube.png',
            title: 'Youtube',
            link: '',
            head: 'Join us on',
            size: ''
        }, {
            image: '/images/discord.png',
            title: 'Discord',
            link: '',
            head: 'Join us on',
            size: 'mr-6'
        }, {
            image: '/images/instagram.png',
            title: 'Instagram',
            link: '',
            head: 'Join us on',
            size: 'mr-6'
        }, {
            image: '/images/reddit.png',
            title: 'Reddit',
            link: '',
            head: 'Join us on',
            size: ''
        }]
    const options = {
        responsive: true,
        scales: {
            y: {
                ticks: {
                    display: false
                }
            },
            x: {
                ticks: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
    };
    const labels = [];
    let prices = [];
    try {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/zookeeper/market_chart?vs_currency=usd&days=14&interval=daily');
        (res.data.prices).map((rs) => {
            labels.push(new Date(rs[0]).toLocaleDateString("en-US"))
            prices.push(rs[1])
        })
    } catch (error) {
        console.log(error)
    }
    const dataChart = {
        labels,
        datasets: [
            {
                label: 'Prices',
                data: prices,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    }


    return {
        props: {
            socialData,
            options,
            dataChart,
        }
    }
}

export default function Home({socialData, options, dataChart}) {
    const scroll = (element) =>{
         document.getElementById(element).scrollIntoView({
             behavior: 'smooth'
         });
    }
    return (
        <div>
            <Head>
                <title>ZOO Keeper</title>
                <meta name="description" content=""/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/manifest.json"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
            <div className="w-full" id="home">

                <div
                    className="container mx-auto lg:grid md:grid grid-cols-1 content-center lg:pt-52 md:pt-52 pt-20 pb-24">
                    <div className="lg:flex md:flex sm:block justify-between content-center">
                        <div id="logo-main" className="lg:mr-5 md:mr-5 lg:ml-10">
                            <img src="/images/logo.png" alt="Zoo Keeper"/>
                        </div>
                        <div className="w-full">

                            <div className="font-rb lg:text-6xl md:text-6xl text-4xl text-white">
                                LIMITLESS<br/>ENTERTAINMENT
                            </div>
                            <div className="text-white mt-14 font-r text-xl">
                                <span className="text-4xl font-rb lh-1 sm-block">ZooEcosystem</span> is a pillar of
                                blockchain
                                gaming.<br/>
                                It is <strong>fast,</strong> without gas fees and highly secure.
                            </div>
                            <div className="text-white lg:mt-36 md:mt-36 mt-10 mx-290">
                                <div className="text-2xl  font-rb mb-2">QUICK ACCESS</div>
                                <div className="flex justify-start lg:w-1/2 w-2/3">
                                    <div className="mr-2 pt-2 pr-4 pb-2 footer-social">
                                        <div className="no-p">
                                            <a href="#" target="_blank" rel="noreferrer">
                                                <div className="icon-social">
                                                    <img src="/images/zoo-crosschain.png" alt="CROSS CHAIN"
                                                         className="content-center"/>
                                                </div>
                                                <div className="text-social no-pt">
                                                    <div className="font-c text-1xl lh-1 color-orange text-middle">CROSS
                                                        CHAIN<br/>SWAP
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                    </div>
                                    <div className="pt-2 pr-4 pb-2 footer-social">
                                        <div className="">
                                            <a href="#" target="_blank" rel="noreferrer">
                                                <img src="/images/zoonft-bridge.png" alt="zoo nft bridge"
                                                     className="logo"/>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="arrow-down shadow-lg" onClick={(e) => scroll("ecosystem")}/>

                </div>

            </div>
            <div className="w-full" id="ecosystem">

                <div className="container mx-auto lg:pt-14 md:pt-14 pt-36 pb-16 lg:pb-0 md:pb-0">
                    <div className="lg:flex md:flex justify-end">
                        <div
                            className="lg:w-2/3 md:w-2/3 w-full flex justify-end flex-wrap md:pr-10 lg:mt-0 md:mt-0 mt-10">
                            <div className="text-right lg:text-3xl md:text-2xl text-sm lh-1-3 font-r w-full">
                                A blockchain <span className="font-rb">gaming-oriented</span> ecosystem<br/>
                                with a <span className="font-rb">multichain</span> focus and<br/>
                                <span className="font-rb">multi community</span> spirit.
                            </div>
                            <div className="mt-12 lg:w-1/2 w-2/3 lg:mx-0 mx-auto mx-220">
                                <div className="font-rb lg:text-2xl md:text-2xl">Connected chains</div>
                                <div className="flex flex-wrap justify-between lg:mt-5 md:mt-5 mt-2">
                                    <div className="lg:pr-2 md:pr-2 pr-1 w-1/2">
                                        <div
                                            className="box-mini color-red background-red rounded sm:micro flex mini-border">
                                            <div className="content-center">
                                                <img src="/images/avalanche.png" alt="avalanche"/>
                                            </div>
                                            <div className="bg-white font-rb lg:pl-2 md:pl-2 pl-1">AVALANCHE</div>
                                        </div>
                                    </div>
                                    <div className="lg:pl-2 md:pl-2 pl-1 w-1/2">
                                        <div
                                            className="box-mini color-blue background-blue rounded sm:micro  flex mini-border">
                                            <div><img src="/images/wanchain.png" alt="wanchain"/></div>
                                            <div className="bg-white font-rb lg:pl-2 md:pl-2 pl-1">WANCHAIN</div>
                                        </div>
                                    </div>
                                    {/*<div className="pr-2 w-1/2">
                                        <div
                                            className="box-mini color-dark-yellow background-dark-yellow rounded  flex mt-4 mini-border">
                                            <div/>
                                            <div className="bg-white font-rb pl-2">SOON</div>
                                        </div>
                                    </div>
                                    <div className="pl-2 w-1/2">
                                        <div
                                            className="box-mini color-gray background-gray rounded  flex mt-4 mini-border">
                                            <div/>
                                            <div className="bg-white font-rb pl-2">SOON</div>
                                        </div>
                                    </div>*/}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="lg:px-10 md:px-10 px-3 py-8 lg:mt-14 md:mt-14 w-full" id="eco-system">
                    <div className="text-white font-r lg:text-2xl md:text-2xl lh-1-2">
                        <span className="font-rb lg:text-5xl md:text-5xl text-2xl">ZooEcosystem</span> is a pillar of
                        blockchain
                        gaming.<br/>
                        It is fast, without gas fees and highly secure.<br/>
                        The ecosystem is made up of three parts:
                    </div>
                    <div className="lg:flex md:flex">
                        <BoxCurve data={{
                            id:'zoo-keeper',
                            number:'01',
                            title:'LIQUIDITY',
                            img:'/images/zoo-keeper-white.png',
                            html:'<div class="font-rb text-2xl">ZOOKEEPER</div>an innovative dApp using<span class="font-rb"> ZooNFTs</span> to boost<br/>liquidity mining'
                        }} />
                        <BoxCurve data={{
                            id:'open-zoo',
                            number:'02',
                            title:'TRADING',
                            img:'/images/open-zoo-white.png',
                            html:'<div class="font-rb text-2xl">OPENZOO</div>an NFT marketplace with a<br/>protocol focused on gaming<br/>based NFTs'
                        }} />
                        <BoxCurve data={{
                            id:'zoo-games',
                            number:'03',
                            title:'PLAY',
                            img:'/images/zoo-game-white.svg',
                            html:'<div class="font-rb text-2xl">ZOOGAMES</div>a complete blockchain<br/>gaming platform powered<br/>by <span class="font-rb">ZOO</span>'
                        }} />

                    </div>
                </div>
            </div>

            <div className="container ml-auto mr-auto lg:mt-14 md:mt-14 mt-5" id="zoo-keeper">
                <div className="lg:flex md:flex justify-between">
                    <div className="img-big md:pl-5 pl-0">
                        <div className="img-curve overflow-hidden">
                            <img src="/images/zookeeper.jpg" alt="Zoo Keeper"/>
                            <a href="https://zookeeper.finance" target="_blank" rel="noreferrer"
                               className="absolute bg-white shadow py-2 px-4 bottom-4 w-2/5 left-4 rounded-10 ex-link">
                                <div className="font-p color-pink lh-1">visit</div>
                                <div className="font-c text-black lh-1">ZooKeeper.finance</div>
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-full md:w-1/2 lg:pl-8 md:pl-4">
                        <div className="flex flex-wrap justify-between lg:w-1/2 md:w-2/3 mx-220">
                            <div className="pr-2 w-1/2">
                                <div className="box-mini micro color-red background-red rounded shadow  flex">
                                    <div className="content-center">
                                        <img src="/images/avalanche.png" alt="avalanche"/>
                                    </div>
                                    <div className="bg-white font-rb w-full text-sm pl-2">AVALANCHE</div>
                                </div>
                            </div>
                            <div className="pl-2 w-1/2">
                                <div className="box-mini micro color-blue background-blue rounded shadow flex">
                                    <div><img src="/images/wanchain.png" alt="WANCHAIN"/></div>
                                    <div className="bg-white w-full font-rb text-sm pl-2">WANCHAIN</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-1">
                            <div className="font-p color-pink lg:text-8xl md:text-6xl text-5xl lh-1">ZOO</div>
                            <div className="font-p text-black lg:text-8xl md:text-6xl text-5xl lh-0-6">KEEPER<span
                                className="lg:text-4xl md::text-4xl text-3xl color-light-green">.finance</span></div>
                        </div>
                        <div className="font-r text-sm mt-3 md:pr-5">
                            <span className="font-rb">ZOOKEEPER</span> was created in order to fuel the <span
                            className="font-rb">ZooEcosystem</span> with liquidity.<br/>
                            With the thought of maximizing commitment from our community<br/>
                            we introduced <span className="font-rb">ZOONFTs</span> which are currently in high
                            demand.<br/><br/>
                            <span className="font-rb">ZOONFTs</span> have unique use cases in the blockchain
                            world,<br/><span className="font-rb">enhancing LP Farming.</span>
                        </div>
                        <div
                            className="grid  gap-4  lg:mt-6 mt-5 grid-cols-4 md:pr-5">
                            <BlackBox data={{
                                title:'91.5%',
                                html:'ZOO tokens<br/>locked on<br/>ZOOKEEPER'
                            }} />
                            <BlackBox data={{
                                title:'5M$',
                                html:'Liquidity<br/>available'
                            }} />
                            <BlackBox data={{
                                title:'26M$',
                                html:'TOTAL<br/>VALUE<br/>LOCKED'
                            }} />
                            <BlackBox data={{
                                title:'7.5k',
                                html:'Unique<br/>users'
                            }} />

                        </div>
                    </div>
                </div>
            </div>


            <div className="container ml-auto mr-auto mt-12" id="open-zoo">
                <div className="lg:flex md:flex justify-between">
                    <div className="img-big md:pl-5">
                        <div className="img-curve overflow-hidden">
                            <img src="/images/openzoo.jpg" alt="OpenZoo"/>
                            <a href="https://openzoo.io" target="_blank" rel="noreferrer"
                               className="absolute bg-white shadow py-2 px-4 bottom-4 w-1/3 left-4 rounded-10 ex-link">
                                <div className="font-p color-pink lh-1">visit</div>
                                <div className="font-c text-black lh-1">OpenZoo.io</div>
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-full md:w-1/2 lg:pl-8 md:pl-5">
                        <div className="flex flex-wrap justify-between  lg:w-1/2 md:w-2/3 mx-220">

                            <div className="w-1/2">
                                <div className="box-mini micro color-blue background-blue rounded shadow flex">
                                    <div><img src="/images/wanchain.png" alt="avalanche"/></div>
                                    <div className="bg-white w-full font-rb text-sm pl-2">WANCHAIN</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-1">
                            <div className="font-p color-pink lg:text-8xl md:text-6xl text-5xl lh-1">OPEN</div>
                            <div className="font-p text-black lg:text-8xl md:text-6xl text-5xl lh-0-6">ZOO<span
                                className="text-4xl color-light-green"> .io</span></div>
                        </div>
                        <div className="font-r text-sm mt-3 md:pr-5">
                            <span className="font-rb">OPENZOO</span> is an easy-to-use NFT Marketplace. Its protocol
                            allows wide
                            flexibility for game creators and it will be the core marketplace for all
                            transactions involving Gaming NFTs within the <span className="font-rb">ZooEcosystem</span>
                        </div>
                        <div
                            className="grid  gap-4 lg:mt-20 mt-5 grid-cols-4 mobile-mt-10 md:pr-5">
                            <BlackBox data={{
                                title:'91.5%',
                                html:'ZOO tokens<br/>locked on<br/>ZOOKEEPER'
                            }} />
                            <BlackBox data={{
                                title:'5M$',
                                html:'Liquidity<br/>available'
                            }} />
                            <BlackBox data={{
                                title:'26M$',
                                html:'TOTAL<br/>VALUE<br/>LOCKED'
                            }} />
                            <BlackBox data={{
                                title:'7.5k',
                                html:'Unique<br/>users'
                            }} />
                        </div>
                    </div>
                </div>
            </div>
            <div id="zoo-games" className="mt-16">
                <div className="container mx-auto pt-16">
                    <div className="lg:flex md:flex">
                        <div className="lg:w-1/2 md:w-1/2 md:pl-5">
                            <h2 className="font-p lh-0-8 color-pink">ZOO<br/><span
                                className="text-white">GAMES</span></h2>
                            <div className="flex flex-wrap justify-start lg:w-1/2 md:w-2/3 mt-6 hide-small">
                                <div className="pr-2 w-1/2">
                                    <div className="box-mini color-red rounded shadow flex micro">
                                        <div className="content-center background-red ">
                                            <img src="/images/avalanche.png" alt="avalanche"/>
                                        </div>
                                        <div className=" bg-transparent font-rb pl-2 text-xs">AVALANCHE</div>
                                    </div>
                                </div>
                                <div className="pl-2 w-1/2">
                                    <div
                                        className="box-mini color-blue  rounded shadow flex micro">
                                        <div className="background-blue">
                                            <img src="/images/wanchain.png" alt="avalanche"/></div>
                                        <div className=" bg-transparent font-rb pl-2 text-xs">WANCHAIN</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:pl-10 md:pl-10 md:pr-5 lg:mt-0 md:mt-0 mt-10">
                            <img src="/images/device.svg" className="responsive-device"/>
                            <div className="text-white font-r text-1-4 mt-4 lh-1">a cross-platform Steam-like dApp
                                powered
                                by <span className="font-rb">ZOO</span></div>
                        </div>

                        <div className="flex-wrap justify-center w-3/4 mt-6 mx-auto show-small-flex mx-220">
                            <div className="pr-2 w-1/2">
                                <div className="box-mini color-red rounded shadow flex micro">
                                    <div className="content-center background-red ">
                                        <img src="/images/avalanche.png" alt="avalanche"/>
                                    </div>
                                    <div className=" bg-transparent font-rb pl-2 text-xs">AVALANCHE</div>
                                </div>
                            </div>
                            <div className="pl-2 w-1/2">
                                <div
                                    className="box-mini color-blue  rounded shadow flex micro">
                                    <div className="background-blue">
                                        <img src="/images/wanchain.png" alt="avalanche"/></div>
                                    <div className=" bg-transparent font-rb pl-2 text-xs">WANCHAIN</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="section-4" className="lg:p-10 md:p-10">
                <div className="mx-auto img-curve lg:p-10 md:p-5" id="section-content-4">
                    <div className="flex lg:flex-row md:flex-row flex-col-reverse justify-between container relative mx-auto mb-10">
                        <div className="lg:w-1/2 md:w-1/2">
                            <div id="keyboard" className="hide-small"><img src="/images/keyboard_games.png" alt=""/>
                            </div>
                            <div className="text-white font-r md:pr-12">
                                Games will benefit from Multichain and players will be entitled to<br/>
                                free gas fees paid by the protocol thanks to a proxy mirror service.<br/>
                                <span className="font-rb">API and Tools</span> will also be made available to developers
                                enabling<br/>
                                a direct and secure connection with the <span className="font-rb">ZooEcosystem</span>
                            </div>
                            <a href="#" className="bg-white shadow py-2 px-4 w-1/2 mt-5 block rounded-10 ex-link sm-no-x lg:mb-0 md:mb-0 mb-10">
                                <div className="font-p color-pink lh-1">visit</div>
                                <div className="font-c text-black lh-1">Zoo.Games</div>
                            </a>
                        </div>
                        <div className="lg:w-1/2 md:w-1/2 flex lg:justify-end lg:pl-5 md:justify-between xs-block">
                            <div className="box-curve p-2  lg:my-16 md:my-16 my-5 lg:mr-5 md:mr-1  glass shadow-lg sm-mr-1">

                                <div className="font-p lg:text-3xl text-2xl lh-1 text-white px-5 mt-10">PLAYER
                                    SIDE<br/>FEATURES
                                </div>

                                <div className="lg:mt-5 p-5 mb-5 text-white font-r lh-2 md:text-sm">
                                    Playing games<br/>
                                    Easy Wallet Connect<br/>
                                    Game NFT trading<br/>
                                    Staking<br/>
                                    IGO (Initial Game Offering)<br/>
                                    Guild creation<br/>
                                    Lending and Borrowing<br/>
                                    and more...
                                </div>
                            </div>
                            <div className="box-curve p-2   lg:my-16 md:my-16 my-5 glass shadow-lg sm-ml-1">

                                <div className="font-p lg:text-3xl text-2xl lh-1 text-white px-5 mt-10">DEV SIDE<br/>FEATURES
                                </div>

                                <div className="lg:mt-5 p-5 mb-5 text-white font-r lh-2 md:text-sm">
                                    Easy API connect<br/>
                                    Secure and fast<br/>
                                    Zero Knowledge protocol<br/>
                                    Multichain out of the box<br/>
                                    Strong community<br/>
                                    ZOO Team assistance<br/>
                                    Financial help<br/>
                                    and more...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto lg:mt-16 md:mt-16 mt-0">
                    <div className="lg:flex md:flex justify-between flex-wrap">
                        <div className="lg:w-1/2 md:w-full">
                            <div className="mt-5 flex justify-between">
                                <div className="lg:w-1/2 md:w-2/3">
                                    <div className="font-p color-pink lg:text-8xl md:text-7xl text-5xl lh-0-8">ZOO<br/>
                                        <span className="text-black">TOKEN</span>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 md:w-2/1">
                                    <SocialFooter social={{
                                        title: 'CoinMarketCap',
                                        image: '/images/coin-market-cap.jpg',
                                        head: 'View on',
                                        link: '#',
                                        size: 'lg:ml-10 md:ml-10'
                                    }}/>
                                    <SocialFooter social={{
                                        title: 'CoinGecko',
                                        image: '/images/gecko.png',
                                        head: 'View on',
                                        link: '#',
                                        size: 'lg:ml-10 md:ml-10'
                                    }}/>
                                </div>
                            </div>
                            <div className="font-r text-sm lg:mt-8 md:mt-8 mt-5">
                                <span className="font-rb">ZOO</span> is the main currency of the <span
                                className="font-rb">ZooEcosystem</span> and has already<br/>
                                plenty of use cases. A wrapped version of it (the vZOO) will be used<br/>
                                to cross chain from one chain to another.<br/>
                                <span className="font-rb">ZOO</span> is audited by <span
                                className="font-rb">WANCHAIN</span> and <span className="font-rb">HAECHI</span>

                            </div>
                            <div className="grid  gap-4 lg:mt-14 md:mt-14 mt-5 grid-cols-4 lg:pr-14">
                                <BlackBox data={{
                                    title:'7M$',
                                    html:'MARKETCAP<br/>(FEB 2022)'
                                }} />
                                <BlackBox data={{
                                    title:'500k',
                                    html:'USD volume<br/>(CEX+DEX)'
                                }} />
                                <BlackBox data={{
                                    title:'13k+',
                                    html:'Daily<br/>transactions'
                                }} />
                                <BlackBox data={{
                                    title:'7.5k+',
                                    html:'Unique<br/>holders'
                                }} />

                            </div>
                        </div>
                        <div className="show-small mb-10"/>
                        <div className="lg:w-1/2 md:w-full content-center text-center lg:pl-10 lg:pt-24 md:pt-10 hide-small">
                            <Line options={options} data={dataChart}/>
                        </div>
                    </div>

                </div>
            </div>
            <div id="section-5">
                <div className="container flex lg:justify-end md:flex-wrap mx-auto lg:pb-20 md:pb-20 pb-10">
                    <div className="lg:w-2/3 md:w-full lg:pl-14 md:px-5">
                        <div className="flex flex-wrap justify-start  lg:w-1/2 md:w-1/2 w-full mx-220 mt-10 lg:pl-3 md:pl-3">

                            <div className="pr-1 lg:w-1/3 md:w-1/3 w-1/2">
                                <div className="box-mini color-red rounded  flex micro">
                                    <div className="content-center background-red ">
                                        <img src="/images/avalanche.png" alt="avalanche"/>
                                    </div>
                                    <div className="background-red font-r pl-1 text-xs text-white">AVALANCHE</div>
                                </div>
                            </div>
                            <div className="pl-1 lg:w-1/3 md:w-1/3 w-1/2">
                                <div
                                    className="box-mini color-blue  rounded  flex micro">
                                    <div className="background-blue">
                                        <img src="/images/wanchain.png" alt="avalanche"/></div>
                                    <div className="background-blue font-r pl-1 text-xs text-white">WANCHAIN</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 flex justify-between">
                            <div className="w-1/2">
                                <h2 className="font-p text-white lh-0-8">CROSS<br/>
                                    CHAIN
                                </h2>
                            </div>
                            <div className="w-1/2 pl-10 flex flex-wrap justify-end hide-small">
                                <div className="w-full text-white text-2xl text-right pr-5 font-rb mb-2">QUICK ACCESS
                                </div>
                                <div className="ml-5 pt-2 pb-2 footer-social">
                                    <div className="no-p">
                                        <a href="#" target="_blank" rel="noreferrer">
                                            <div className="icon-social">
                                                <img src="/images/zoo-crosschain.png" alt="CROSS CHAIN"
                                                     className="content-center"/>
                                            </div>
                                            <div className="text-social no-pt">
                                                <div className="font-c text-1xl lh-1 text-middle color-orange">CROSS
                                                    CHAIN<br/>SWAP
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                                <div className="pt-2 footer-social">
                                    <div className="">
                                        <a href="#" target="_blank" rel="noreferrer">
                                            <img src="/images/zoonft-bridge.png" alt="zoo nft bridge"
                                                 className="logo"/>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="font-r text-white  mt-5 text-lg lh-1-3 lg:pr-16 md:pr-16">
                            We choose to use <span className="font-rb">WanBridge</span> as it is of prime importance for
                            ZOO to be on
                            a decentralized, fast and secure bridge. With more chains currently being added,
                            WanBridge is an industry-leading decentralized cross chain infrastructure
                            that already includes <span className="font-rb">Bitcoin, Ethereum, Wanchain, EOSIO, Binance Smart Chain,
                            Litecoin, XRP Ledger, Avalanche and Moonriver.</span>


                        </div>
                        <div className="lg:mt-14 md:mt-14 mt-8">
                            <img src="/images/wan-bridge.png" alt="WanBridge"/>
                        </div>
                        <a href="#" className="bg-white shadow py-2 px-4 w-1/2 mt-5 block rounded-10 ex-link sm-no-x">
                            <div className="font-p color-pink lh-1">view</div>
                            <div className="font-c text-black lh-1">ProtocolMap.pdf</div>
                        </a>

                        <div className="mt-5 show-small mx-290">

                            <div className="pt-5">
                                <div className="w-full text-white font-rb mb-2">QUICK ACCESS
                                </div>
                                <div className="grid grid-cols-2 gap-x-3">
                                    <div className="pt-2 pb-2 footer-social">
                                        <div>
                                            <a href="#" target="_blank" rel="noreferrer">
                                                <div className="icon-social">
                                                    <img src="/images/zoo-crosschain.png" alt="CROSS CHAIN"
                                                         className="content-center"/>
                                                </div>
                                                <div className="text-social no-pt">
                                                    <div className="font-c text-1xl lh-1 text-middle color-orange">CROSS
                                                        CHAIN<br/>SWAP
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="pt-2 footer-social">
                                        <div className="">
                                            <a href="#" target="_blank" rel="noreferrer">
                                                <img src="/images/zoonft-bridge.png" alt="zoo nft bridge"
                                                     className="logo"/>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div id="section-6">
                <div className="container mx-auto lg:py-16 ">
                    <div className="lg:flex md:flex lg:justify-between md:flex-wrap md:px-5 content-center">
                        <div className="lg:w-1/2 md:w-full relative  md:h-96 hide-small">
                            <div id="video" className="bg-black absolute top-0 left-0 bottom-0 right-0 mt-14">
                                <iframe
                                    src="https://www.youtube-nocookie.com/embed/8E-1W6sCco0?controls=0&autoplay=1&loop=1"
                                    title="Zoo Racer" frameBorder="0" className="absolute w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="lg:w-1/2 md:w-full lg:pl-16 md:pt-10 pt-10 pb-10">
                            <div className="color-light-green text-2xl font-p">SIDE PROJECT</div>
                            <div className="font-p mt-5 color-pink lg:text-8xl md:text-8xl text-6xl lh-0-8">ZOO<br/>
                                <span className="text-white">RACERS</span>
                            </div>
                            <div className="mt-5 text-white font-r">
                                <span className="font-rb">ZooRacers</span> is being developed by our gaming studio
                                partner <span className="font-rb">YGGDRAZIL.</span><br/>
                                <span className="font-rb">ZooRacers</span> is a 3D kart battle-arena style game where
                                players can use<br/>
                                their ZOONFTs as weapons and perks. Emphasis is made on fun and<br/>
                                addictive gameplay, topped up with a cool cartoonesque design.<br/><br/>
                                Customize your kart, your controllable animal, and your playing style
                                to battle for the leaderboard against other players on a map.
                            </div>
                            <div className="mt-10 grid gap-4 grid-cols-4 ">
                                <div className="w-full bg-black text-white img-curve px-2 py-4 mr-4">
                                    <div className="font-p text-3xl color-light-green text-center">
                                        <img src="/images/windows-microsoft.svg" className="img-70"/>
                                    </div>
                                    <div className="text-xs lh-1-2 font-r text-center mt-2">
                                        COMPATIBLE
                                    </div>
                                </div>
                                <div className="w-full bg-black text-white img-curve px-2 py-4 mr-4">
                                    <div className="font-p text-3xl color-light-green text-center">
                                        <img src="/images/MacOS_logo.svg" className="img-70"/>
                                    </div>
                                    <div className="text-xs lh-1-2  font-r text-center mt-2">
                                        COMPATIBLE
                                    </div>
                                </div>
                                <div className="w-full bg-black text-white img-curve px-2 py-4 mr-4">
                                    <div className="font-p text-3xl color-light-green text-center">
                                        <img src="/images/ios-apple.svg" className="img-70"/>
                                    </div>
                                    <div className="text-xs lh-1-2  font-r text-center mt-2">
                                        COMPATIBLE
                                    </div>
                                </div>
                                <div className="w-full bg-black text-white img-curve px-2 py-4 lg:mr-4">
                                    <div className="font-p text-3xl color-light-green text-center">
                                        <img src="/images/android.svg" className="img-70"/>
                                    </div>
                                    <div className="text-xs lh-1-2  font-r text-center mt-2">
                                        COMPATIBLE
                                    </div>
                                </div>
                            </div>
                            <div className="show-small mx-290 mx-auto">
                                <a href="https://www.youtube.com/watch?v=8E-1W6sCco0" target="_blank" rel="noreferrer"
                                   className="bg-white shadow py-2 px-4 w-2/3 mx-auto mt-10 block rounded-10 ">
                                    <div className="font-p color-pink lh-1">watch</div>
                                    <div className="font-c text-black lh-1">Trailer on Youtube</div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div id="section-7">
                <div className="container ml-auto mr-auto lg:pt-10 md:pt-10 pt-0 md:px-5">
                    <div className="lg:flex md:flex">
                        <div className="w-1/2 c-w-1-3">
                            <div className="img-curve x-image">
                                <img src="/images/big-cat.jpg" alt="Zoo Game"/>
                            </div>
                        </div>
                        <div className="w-1/2 lg:py-5 c-w-1-2">
                            <div className="mt-5 lg:flex md:flex justify-between lg:ml-16 md:ml-16 ml-5 sm-ml-0">
                                <div className="lg:w-2/1 md:w-2/1 w-full">
                                    <div className="lg:mt-0 md:mt-0 mt-5">
                                        <div
                                            className="font-p color-pink lg:text-8xl md:text-6xl text-5xl lh-0-8">ZOO<br/>
                                            <span className="text-black">GENES</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="lg:w-2/3 md:w-2/3 w-full lg:pl-5 md:pl-5 lg:block md:block grid gap-x-3 grid-cols-2 lg:mt-0 md:mt-0 mt-5 mx-290">

                                    <SocialFooter social={{
                                        title: 'ZooGenes.io',
                                        image: '/images/zoogenes_icon.svg',
                                        head: 'visit',
                                        link: 'https://zoogenes.io',
                                        size: 'w-full text-c'
                                    }}/>
                                    <SocialFooter social={{
                                        title: 'OpenZoo.io',
                                        image: '/images/openzoo.png',
                                        head: 'Buy on',
                                        link: 'https://openzoo.io',
                                        size: 'w-full text-c'
                                    }}/>
                                </div>
                            </div>
                            <div className="font-r text-sm lg:mt-10 mt-5 lg:ml-16 md:ml-16 ml-5 sm-ml-0">
                                In <span className="font-rb">ZooRacers, ZooGenes</span> are playable characters used
                                as
                                in-game drivers which,<br/>
                                besides being tradable, have <span
                                className="font-rb">unique visual characteristics</span>
                                , but also have individual<br/>
                                abilities (e.g. Strength, Agility, etc).<br/>
                                These stats will be applied to every future <span
                                className="font-rb">ZooEcosystem</span> game.

                            </div>
                            <div
                                className="grid gap-4 mt-10 grid-cols-4 lg:ml-16 md:ml-16">
                                <BlackBox data={{
                                    title:'10k',
                                    html:'ZOOGENES<br/>SOLD OUT'
                                }} />
                                <BlackBox data={{
                                    title:'~150k',
                                    html:'MARKET<br/>TRADED (USD)'
                                }} />
                                <BlackBox data={{
                                    title:'15+',
                                    html:'ABILITIES<br/>CLASS'
                                }} />
                                <BlackBox data={{
                                    title:'3.2k',
                                    html:'CURRENT<br/>OWNERS'
                                }} />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container ml-auto mr-auto pb-20 lg:mt-0 mt-10 md:px-5">
                    <div className="lg:flex md:flex justify-between">
                        <div className="w-1/2 c-w-1-3">
                            <div className="img-curve overflow-hidden">
                                <img src="/images/yggdrazil.jpg" alt="YGGDRAZIL"/>
                                <a href="https://ygg-cg.com"
                                   className="absolute bg-white shadow py-2 px-4 bottom-4 left-4 lg:w-1/4 md:w-1/4 rounded-10 ex-link">
                                    <div className="font-p color-pink lh-1">visit</div>
                                    <div className="font-c text-black lh-1">ygg-cg.com</div>
                                </a>
                            </div>
                        </div>
                        <div className="w-1/2 c-w-1-2">
                            <div className="lg:ml-16 md:ml-16 lg:mt-0 md:mt-0 mt-5">
                                <div className="font-p color-pink lg:text-8xl md:text-6xl text-5xl lh-0-8">OUR<br/>
                                    <span className="text-black">PARTNER</span></div>
                            </div>
                            <div className="font-r text-sm lg:mt-10 mt-5 lg:ml-16 md:ml-16">
                                <span className="font-rb">YGGDRAZIL</span> in a few points:<br/>
                                Leader in VFX/animation in SEA and Gaming Studio<br/>
                                VFX specialists and passionate about gaming

                                <div className="text-center mt-5">
                                    <span className="font-rb">Projects include:</span> FFXV Kingsglave, Home Sweet
                                    Home
                                    Ep.1, Ep.2 and Survive,
                                    Free Fire live action undefeated, and more…
                                </div>
                            </div>
                            <div
                                className="grid gap-4 mt-10 grid-cols-4 lg:ml-16 md:ml-16">
                                <div className="w-full  px-2 " id="yggdrazil-logo">
                                    <img src="/images/yggdrazil.png" alt="YGGDRAZIL"/>
                                </div>
                                <BlackBox data={{
                                    title:'220+',
                                    html:'STAFF<br/>MEMBERS'
                                }} />
                                <BlackBox data={{
                                    title:'270M$',
                                    html:'MARKET<br/>CAP'
                                }} />
                                <BlackBox data={{
                                    title:'30+',
                                    html:'INDUSTRY<br/>AWARDS'
                                }} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container mx-auto py-10 md:px-5 mx-290">
                    <h4 className="font-p color-pink  lg:text-4xl md:text-2xl text-4xl lg:mb-5 md:mb-5 mb-1">JOIN
                        US</h4>
                    <div className="lg:flex">
                        <div className="lg:w-2/3">
                            <div
                                className="lg:flex lg:justify-start lg:flex-wrap grid md:grid-cols-3 grid-cols-2 md:gap-0 gap-x-3 gap-y-2">
                                {socialData.map((social, index) => (
                                    <SocialFooter social={social} key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
                <div id="footer-blog" className="py-5">
                    <div className="container mx-auto md:px-5">
                        <div className="lg:flex md:flex justify-between">
                            <div className="lg:w-2/3 w-full mx-290 mx-auto">
                                <h4 className="font-p color-pink  lg:text-4xl md:text-2xl text-4xl lg:mb-5 md:mb-5 mb-1">BLOG</h4>
                                <div
                                    className="lg:flex lg:justify-start lg:flex-wrap grid md:grid-cols-3 grid-cols-2 md:gap-0 gap-x-3 gap-y-2">
                                <SocialFooter social={{
                                    title: 'Medium',
                                    image: '/images/medium.png',
                                    head: 'Read us on',
                                    link: '#',
                                    size: 'w-1/2',
                                }}/>
                                </div>
                            </div>
                            <div className="w-full sm-text-center">
                                <h4 className="font-p color-pink lg:text-4xl md:text-2xl text-4xl mb-0">DISCLAIMER</h4>
                                <p className="text-white font-m md:text-sm">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing
                                    elit. Accusamus, blanditiis
                                    eligendi exercitationem laudantium libero magnam molestiae non placeat porro
                                    quas
                                    quasi recusandae reiciendis rem tempora totam veniam veritatis voluptas
                                    voluptatum.</p>
                                <p className="text-gray-200 font-m mt-2 md:text-sm">Copyright ZooEcosystem 2022 - MADE
                                    WITH
                                    LOVE
                                    FOR EVERYONE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
