const Cookies = () => {
    let hupspot = () => {
        var _hsp = window._hsp = window._hsp || []; _hsp.push(['showBanner']);
        console.log("cookie klick test")
    }

    // onClick="(function(){var _hsp = window._hsp = window._hsp || []; _hsp.push(['showBanner']);})"

    return (<div>
        <button type="button" id="hs_show_banner_button" onClick={() => hupspot()}>Cookie-Einstellungen</button>
        <style jsx>{`
        #hs_show_banner_button{
            background-color: #00bda5; 
            border: 1px solid #00bda5;
            border-radius: 3px; 
            padding: 10px 16px; 
            text-decoration: none; 
            color: #fff;
            font-family: inherit; 
            font-size: inherit; 
            font-weight: normal; 
            line-height: inherit;
            text-align: left; 
            text-shadow: none;
        }
        `}</style>
    </div>);
}

export default Cookies;