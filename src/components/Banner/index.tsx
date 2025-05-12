import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Banner_1 from "../../assets/Desktop/Banner carousel 1 _ 1440 (1).png";
import Banner_2 from "../../assets/Desktop/Banner carousel 2 _ 1440 (1).png";
import Banner_3 from "../../assets/Desktop/Banner carousel 3 _ 1440 (1).png";
import styles from "./banner.module.css"
import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";


export default function Banner(){

    const [selectedId, setSelectedId] = useState(1)
    const images = [
        {
            id: 1,
            banner:Banner_1,
        },
        {
            id: 2,
            banner:Banner_2
        },
        {
            id: 3,
            banner:Banner_3
        }

    ]


    function selectBanner(){
       return images.filter((item) => item.id == selectedId)
    }

    function fowardArrow(){
        if(selectedId >= 1 && selectedId != images.length){
            setSelectedId(selectedId + 1)
        } else {
            return selectedId
        }    
    }

    function backwardsArrow(){
        if(selectedId <= images.length && selectedId != 1){
            setSelectedId(selectedId - 1)
        } else {
            return selectedId
        }   
    }
    console.log(selectedId)

    return(
        <div className={styles.banner_container}>
            <button onClick={backwardsArrow} className={styles.button_left}>
                <FontAwesomeIcon icon={faSquareCaretLeft} />
            </button>
            {
              selectBanner().map(item =>
                (
                        <img src={item.banner} alt="" />           
                )
              )
            }
            <div className={styles.indicators}>
                {images.map((item) => (
                    <span
                        key={item.id}
                        className={
                            item.id === selectedId
                                ? styles.active_indicator
                                : styles.indicator
                        }
                        onClick={() => setSelectedId(item.id)} // permite clicar na linha para trocar
                    />
                ))}
            </div>
            <button onClick={fowardArrow} className={styles.button_right} >
                <FontAwesomeIcon icon={faSquareCaretRight} />
            </button>
        </div>
    )
}