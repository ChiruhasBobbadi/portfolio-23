import {VariantsSelectorWrapper} from "./VariantsSelectorWrapper";
import {Card,Radio} from "@nextui-org/react";
import {useState} from "react";


const Resume = ()=>{

    /**
     *0th index => full stack
     * 1st => front end
     * 2nd => backend
     */
    const urls =["https://drive.google.com/file/d/1nceqXh_Rm4D_i2AlYaVdDXKFo_8Ge2xs/preview","https://drive.google.com/file/d/11OzPQfHnkH5q3nQQ7npu1iSE7LMQulOE/preview","https://drive.google.com/file/d/1GguJ8ddr01X8yDuHmvd6mL6ULEbbyN7f/preview"]

    const [variant, setVariant] = useState("Web (Full Stack)");

    const [url, setUrl ]= useState("https://drive.google.com/file/d/1nceqXh_Rm4D_i2AlYaVdDXKFo_8Ge2xs/preview")



    const changeContent = (e)=>{

        console.log(e);

        setVariant(e)
        if(e==="Web (Full Stack)")
            setUrl(urls[0])
        else if(e==="Web (Front End)")
        setUrl(urls[1])
        else
            setUrl(urls[2])

    }


    const variants = ["Web (Full Stack)", "Web (Front End)", "Mobile"];


    return <div>

        <VariantsSelectorWrapper>
            <Card css={{maxW: "50%"}}>
                <Card.Body css={{pt: "$8", px: "$8"}}>
                    <Radio.Group
                        defaultValue="default"
                        // label="Choose Type"
                        orientation="horizontal"
                        size="sm"
                        value={variant}
                        onChange={changeContent}
                    >
                        {variants.map((variant) => (
                            <Radio key={variant} value={variant}>
                                {variant}
                            </Radio>
                        ))}
                    </Radio.Group>
                </Card.Body>
            </Card>
        </VariantsSelectorWrapper>
        <iframe src={url}
                style={{display:"block",height:"100vh",width:"100vw" }}/>
    </div>



}


 export default Resume
