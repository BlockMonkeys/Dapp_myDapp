import React, { useState, useEffect } from 'react';
import Axios from "axios";

function Ipfs_upload(props) {

    const [SelectedFile, setSelectedFile] = useState(null);
    const [IpfsHash, setIpfsHash] = useState("");

    const IpfsUpload_Submit = () => {
        let formData = new FormData();
        formData.append("file", SelectedFile);
        Axios.post("http://localhost:5000/api/blockchain/ipfs/upload", formData)
            .then(res => {
                setIpfsHash(res.data.Ipfshash);
            });
    };

    const setFileHandler = (e) => {
        setSelectedFile(e.currentTarget.files[0]);
    };
    return (
        <div>
            <h1>IPFS에 유서 업로드하기</h1>

            {/* IPFS에 파일 업로드 */}
            <div>
                <input type="file" onChange={setFileHandler}/>
                <button onClick={IpfsUpload_Submit}>IPFS 업로드</button>
            </div>

            {/* IPFS해시값이 존재할 경우에만 해시값 출력 */}
            {IpfsHash ?
                <div>
                    <span>Your IPFS Hash :</span>
                    <span>{IpfsHash}</span>
                </div>
            :
                <>
                </>
            }

        </div>
    )
}

export default Ipfs_upload;