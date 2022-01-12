import React, {useState} from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white" 
    });
    const [btnText, setBtnText] = useState("Enable Darkmode");

    const toggleStyle = ()=>{
        if(myStyle.color === "black"){
            setMyStyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white"
            });
            setBtnText("Disable Darkmode");
        }
        else{
            setMyStyle({
                color: "black",
                backgroundColor: "white" 
            });
            setBtnText("Enable Darkmode");
        }
    }
    return (
        <>
        <div className='container' style={myStyle}>
            <h1 className='my-2'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h4>Who are We</h4>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>ATech Solutions</strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                       <h4>ATech Solutions Vission</h4>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    A technologically connected world where no entity is left behind. We at Salsoft empower businesses with innovative IT enabled services globally.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <h4>ATech Solutions Contact Info</h4>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body"  style={myStyle}>
                        You can easily access us by our mail <strong>a.ahad.qu@gamil.com</strong>
                    </div>
                    </div>
                </div>
            </div>
            <button type='button' className='btn btn-primary my-2' onClick={toggleStyle}>{btnText}</button>
        </div>
        </>
    )
}
