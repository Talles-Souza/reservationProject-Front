import React from "react";
import { Header } from "../../components/header";

function Test() {
    return (<>

        <div style={{ backgroundColor: "#7D7E81", height: '100vh', display: 'flex', width: '100%' }}>
            <div style={{ backgroundColor: "#7D7E81", height: '100%', display: 'flex', width: '100%', justifyContent: "space-between", flexWrap: 'wrap' }}>
                <div style={{ backgroundColor: "#FFFFFF", width: '39%', height: '50%' }}></div>
                <div style={{ height: '12%', width: '60%' }}>
                    <Header />
                    <hr style={{ color: "#FFFFFF" }}></hr>
                </div>
            </div>
        </div>
    </>
    );
}
export default Test;

