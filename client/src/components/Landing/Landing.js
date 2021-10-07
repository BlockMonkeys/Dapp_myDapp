import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Ipfs_upload from "./sections/Ipfs_upload";
import Manual from "./sections/Manual";
import Record_Blockchain from "./sections/Record_Blockchain";
import Lookup_Testament from "./sections/Lookup_Testament";

function Landing(props) {
    return (
        <div>
            <h1>유서서비스</h1>

                {/* Manual */}
                <Manual />

                {/* 유서 업로드 To IPFS */}
                <Ipfs_upload />

                {/* 블록체인 업로드 */}
                <Record_Blockchain />

                {/* 조회서비스 */}
                <Lookup_Testament />

        </div>
    )
}

export default Landing
