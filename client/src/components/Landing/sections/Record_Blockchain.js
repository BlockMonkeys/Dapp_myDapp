import React, { useState } from 'react';
import Axios from "axios";

function Record_Blockchain(props) {
    const [Hash, setHash] = useState("");
    const [Writer, setWriter] = useState("");
    const [Password, setPassword] = useState(null);


    const uploadBlockChainHandler = () => {
        const payload = {
            Hash : Hash,
            Writer : Writer,
            Password : Password,
        };

        Axios.post("http://localhost:5000/api/blockchain/set/testament", payload)
            .then(res => {
                console.log(res);
            });
    };

    return (
        <div>
            <h1>블록체인에 기록하기</h1>
            <div>
                <div>
                    <label>IPFS HASH</label>
                    <input 
                        type="text" 
                        placeholder="IPFS 해시값을 입력하세요"
                        value={Hash}
                        onChange={e => setHash(e.currentTarget.value)}
                    />
                </div>

                <div>
                    <label>Name of Writer</label>
                    <input 
                        type="text" 
                        placeholder="성함"
                        value={Writer}
                        onChange={e => setWriter(e.currentTarget.value)}
                    />
                </div>

                <div>
                    <label>암호 (숫자 6자리)</label>
                    <input 
                        type="password" 
                        placeholder="암호를 입력해주세요"
                        onChange={e => setPassword(e.currentTarget.value)}    
                    />
                </div>
            </div>

            <button
                onClick={uploadBlockChainHandler}
            >
                블록체인에 기록하기
            </button>
        </div>
    )
};

export default Record_Blockchain;
