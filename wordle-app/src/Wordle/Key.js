import {useEffect, useState} from 'react';

export default function Key({value, selectKey, removeKey, enterKey, displayKeyboardProgress}) {
    // const [isLoading, setIsLoading] = useState(true)

    const classNames = displayKeyboardProgress(value);



    // useEffect(() => {
    //     if (classNames.length > 0) {
            // setIsLoading(false);
    //     }
    // }, []);

    // console.log(classNames,', ', value);

    return ( 
        <div>
            {/* {isLoading === true && <div>loading...</div>}  
            {isLoading !== true && (
            <> */}
            {value !== 'Ent' && value !== 'Del' && (
                <><input id={`btn${value}`} className={`key ${classNames}`} type="button" value={`${value}`} onClick={() => selectKey(`${value}`)}/></>
            )}
            {value === 'Ent' && (
                <><input id={`btn${value}`} className={`big-key `} type="button" value={`Enter`} onClick={() => enterKey()}/></>
            )}
            {value === 'Del' && (
                <><input id={`btn${value}`} className={`big-key `} type="button" value='&#129056;' onClick={() => removeKey()}/></>
            )}
            {/* </>
            )} */}
        </div>
    )
}