import React, { useState } from 'react'
import Axios from "axios";

function Lookup_Testament(props) {
    const [Password, setPassword] = useState(null);
    const [IpfsHash, setIpfsHash] = useState("");
    const [Writer, setWriter] = useState("");
    const [Time, setTime] = useState("");
    
    const getBlockChainHandler = () => {
        
        const payload = {
            Password: Password
        }
        Axios.post("http://localhost:5000/api/blockchain/get/testament", payload)
            .then(res => {
                if(res.data.success){
                    setIpfsHash(res.data.payload.IpfsHash);
                    setWriter(res.data.payload.Writer);
                    setTime(new Date(Number(res.data.payload.Time)).toISOString());
                } else {
                    console.log("블록체인에서 정보를 가져올 수 없습니다.");
                };
            });
    };

    const open_testament = () => {
        window.open(`https://ipfs.io/ipfs/${IpfsHash}`, "_blank")
    }

    return (
        <div>
            <h1>유서 조회하기</h1>

            <div>
                <label>암호를 입력하세요.</label>
                <input 
                    type="password" 
                    onChange={e => setPassword(e.currentTarget.value)}
                />
            </div>

            <button
                onClick={getBlockChainHandler}
            >
                조회
            </button>
            {IpfsHash ? 
            <div>
                <div>
                    <span>작성자 : </span>
                    <span>{Writer}</span>
                </div>

                <div>
                    <span>작성일 : </span>
                    <span>{Time.split("T")[0]}</span>
                </div>

                <div>
                    <span>작성시간 : </span>
                    <span>{Time.split("T")[1].substring(0,8)}</span>
                </div>

                <div>
                    <span>IPFS HASH : </span>
                    <span>{IpfsHash}</span>
                </div>

                <div>
                    <button
                        onClick={open_testament}
                    >
                        유서 보러가기
                    </button>
                </div> 
            </div>
            :
            <>
            </>
            }
            
        </div>
    )
}

export default Lookup_Testament;
