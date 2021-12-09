import React, { useEffect, useState } from "react"

import "./utility.css"
import Card from "../card/card";
// import logo_image from "../../assets/header/logo.webp"
import { BsFileMinusFill, BsFilePlusFill } from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
function Utility() {
    const [card1, setCard1] = useState({
        title: "Certificate of authenticity",
        svg: 1,
        description: "- Owners  will  be  able  to  download  after  purchase  (pdf/email/download)",
        text1:"- Only  applies  to  the  original  owner"
    })
    const [card2, setCard2] = useState({
        title: "Exclusive access to community groups",
        svg: 2,
        description: "- Community  events",
        text1:"- Discord  groups"
    })
    const [card3, setCard3] = useState({
        title: "Owners will be entered into raffles",
        svg: 3,
        description: "- Owners  will  be  into  raffles  for  items  such  as  eth,  goods,  merch,  etc",
    })
    const [card6, setCard6] = useState({
        title: "Random chance to win original art & seeds to rare plant",
        svg: 6,
        description: "- Physical  original  art  of  NFT  will  be  mailed  to  owners  (or  value  in  eth)",
        text1:"- Seeds  mailed  to  owners  *subject  to  country  laws*"
    })
    const [card4, setCard4] = useState({
        title: "Rewards  from  staking  NFTs",
        svg: 4,
        description: "- Owners  will  be  allowed  to  stake  their  NFTs  and  claim  rewards",
        text1:"- More  details  as  Metaverse  integration  is  completed"
    })
    const [card5, setCard5] = useState({
        title: "Special  offer  codes  to  redeem  discounted  items",
        svg: 5,
        description: "- Owners  will  be  able  to  use  these  special  offer  codes  to  receive  discounts  on  merchandise  from the  Power  Plants  store",
    })
    const [card7, setCard7] = useState({
        title: "Planting 4 trees for every NFT minted",
        svg: 7,
        description: "- Donating  2  trees  for  every  order.  Power  Plants  will  match  if  all  5K  are  minted",
        text1:"- Owners  will  have  the  ability  to  have  4  trees  planted  on  behalf  of  Power  Plants",
        text2: "- Proof  of  donations"
    })
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [feedback, setFeedback] = useState("");
    const [claimingNft, setClaimingNft] = useState(false);
    const [mintNum, setMintNum] = useState(0)
    const claimNFTs = (_amount) => {
        _amount = document.getElementById("inputBox").textContent;
        if (_amount <= 0) {
            return;
        }
        setFeedback("Minting your Official BooCrew NFT...");
        setClaimingNft(true);
        blockchain.smartContract.methods
            .mint(blockchain.account, _amount)
            // ********
            // You can change the line above to
            // .whiteListMint(blockchain.account, _amount) if you want only whitelisted
            // users to be able to mint through your website!
            // And after you're done with whitelisted users buying from your website,
            // You can switch it back to .mint(blockchain.account, _amount).
            // ********
            .send({
                gasLimit: 285000 * _amount,
                to: "0x8815e06FC5b57Bd4d5590977a697582f19d2330e", // the address of your contract
                from: blockchain.account,
                value: blockchain.web3.utils.toWei((0.035 * _amount).toString(), "ether"),
            })
            .once("error", (err) => {
                console.log(err);
                setFeedback("Sorry, something went wrong. Check your transaction on Etherscan to find out what happened!");
                setClaimingNft(false);
            })
            .then((receipt) => {
                setFeedback(
                    "Your BooCrew NFT has been successfully minted!"
                );
                setClaimingNft(false);
                dispatch(fetchData(blockchain.account));
            });
    };

    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account));
        }
    };

    useEffect(() => {
        getData();
    }, [blockchain.account]);

    const plus_num = () => {
        // const {mintNum} = this.state;
        setMintNum(mintNum + 1);
    }
    const minus_num = () => {
        // const {mintNum} = this.state;
        if (mintNum == 0) return;
        setMintNum(mintNum - 1)
    }

    return (
        <div className="utility_container">
            <div className="utility_section">
                <div className="utility_right_bar">
                    <div className="cards_layout2">
                        <Card title={card1.title} svg={card1.svg}
                            description={card1.description} text={card1.text1}/>
                        <Card title={card2.title} svg={card2.svg}
                            description={card2.description} text={card2.text1}/>
                        <Card title={card3.title} svg={card6.svg}
                            description={card3.description} text={card3.text1}/>
                        <Card title={card4.title} svg={card3.svg}
                            description={card4.description} text={card4.text1}/>
                        <Card title={card5.title} svg={card4.svg}
                            description={card5.description} text={card5.text1}/>
                        <Card title={card6.title} svg={card5.svg}
                            description={card6.description} text={card6.text1}/>
                        <Card title={card7.title} svg={card7.svg}
                            description={card7.description} text={card7.text1} text2={card7.text2}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Utility;