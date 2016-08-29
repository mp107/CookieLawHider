(function(opera) {
	/* Cookie Law Hider */
	var dni = 'display: none !important;';
	var URL = window.document.URL;
	var hostname = {
		value:window.location.hostname, 
		indexOf:function(str){return this.value.indexOf(str);},
		match: function(rx){ return this.value.match(rx); },
		endsWith:function(str){ var pos=this.value.indexOf(str);return pos>-1 && this.value.length===pos+str.length; }
	}
	var getElementsByTagName=window.Document.prototype.getElementsByTagName;
	var createElement=window.Document.prototype.createElement;
	var createTextNode=window.Document.prototype.createTextNode;
	var insertBefore=window.Node.prototype.insertBefore;
	var setAttribute=window.Element.prototype.setAttribute;
	var version=window.opera.version;
	var appendChild=window.Node.prototype.appendChild;
	var call = Function.prototype.call;

	//////////////////////////////////////////////////////////////////////////////////////

	function addCssToDocument(cssText, doc, mediaType){
		getElementsByTagName.call=addEventListener.call=createElement.call=createTextNode.call=insertBefore.call=setAttribute.call=appendChild.call=version.call=call;
		doc = doc||document;
		mediaType = mediaType||'';
		addCssToDocument.styleObj=addCssToDocument.styleObj||{};
		var styles = addCssToDocument.styleObj[mediaType];
		if(!styles){
			var head = getElementsByTagName.call(doc, "head")[0];
			if( !head ){
				var docEl = getElementsByTagName.call(doc, "html")[0];
				if(!docEl){
					// :S this shouldn't happen - see if document hasn't loaded
					addEventListener.call(doc, opera&&version.call(opera)>=9?'DOMContentLoaded':'load',
					function(){ addCssToDocument(cssText, doc); },false);
					return;
				}
				head = createElement.call(doc, "head");
				if(head) insertBefore.call(docEl, head,docEl.firstChild);
				else head = docEl;
			}
			addCssToDocument.styleObj[mediaType] = styles = createElement.call(doc, "style");
			setAttribute.call(styles, "type","text/css");
			if(mediaType)setAttribute.call(styles, "media", mediaType);
			appendChild.call(styles, createTextNode.call(doc,' '));
			appendChild.call(head, styles)
		}
		styles.firstChild.nodeValue += cssText+"\n";
		return true;
	}

	//////////////////////////////////////////////////////////////////////////////////////

	/* Problematic websites */
	if (hostname.indexOf('example.com')>-1 || hostname.indexOf('example.org')>-1)
		return;

	/* "Normal" websites */
	else if (hostname.indexOf('034portal.hr')>-1)
		addCssToDocument('body > center > table:first-child td[height="50"]{'+dni+'}');
	else if (hostname.indexOf('0calc.com')>-1)
		addCssToDocument('.alert-info, .alert-warning{'+dni+'}');
	else if (hostname.indexOf('0rechner.de')>-1)
		addCssToDocument('.alert, #alert{'+dni+'}');
	else if (hostname.indexOf('1000dni.pl')>-1)
		addCssToDocument('body > div:not([id]):not([class]){'+dni+'}');
	else if (hostname.indexOf('1001pneus.fr')>-1)
		addCssToDocument('.topRelativeBanner{'+dni+'}');
	else if (hostname.indexOf('118712.fr')>-1)
		addCssToDocument('#o_ribbon{'+dni+'}');
	else if (hostname.indexOf('1stchoice.co.uk')>-1)
		addCssToDocument('#scl{'+dni+'}');
	else if (hostname.indexOf('1tegration.dk')>-1)
		addCssToDocument('#layoutbox3{'+dni+'}');
	else if (hostname.indexOf('20minutes.fr')>-1)
		addCssToDocument('#cnil-notice,#CNIL-notice{'+dni+'}');
	else if (hostname.indexOf('24jgora.pl')>-1)
		addCssToDocument('#popup{'+dni+'}');
	else if (hostname.indexOf('360qpon.it')>-1)
		addCssToDocument('#footerSlideContainer{'+dni+'}');
	else if (hostname.indexOf('365direkte.no')>-1)
		addCssToDocument('#topNotificationArea,#topNotificationAreaFiller{'+dni+'}');
	else if (hostname.indexOf('3arena.ie')>-1)
		addCssToDocument('.notification, .js-notification, .notifications-container, #notifications, #notification_1, #notification, #notification_area{'+dni+'}');
	else if (hostname.indexOf('3.dk')>-1)
		addCssToDocument('[class="tre-cookie-disclaimer"]{'+dni+'}');
	else if (hostname.indexOf('3rei.info')>-1)
		addCssToDocument('#mydiv{'+dni+'}');
	else if (hostname.indexOf('3vprepaid.com')>-1)
		addCssToDocument('#cookie-container{'+dni+'}');
	else if (hostname.indexOf('48poland.com')>-1)
		addCssToDocument('#gbpl_oba{'+dni+'}');
	else if (hostname.indexOf('4dportal.com')>-1)
		addCssToDocument('#system-message, #system-messages, #system-message-container{'+dni+'}');
	else if (hostname.indexOf('4d.rtvslo.si')>-1)
		addCssToDocument('#size-window-cookie{'+dni+'}');
	else if (hostname.indexOf('4players.de')>-1)
		addCssToDocument('#cookpol{'+dni+'}');
	else if (hostname.indexOf('4web.es')>-1)
		addCssToDocument('#divbottom{'+dni+'}');
	else if (hostname.indexOf('6corde.it')>-1)
		addCssToDocument('.notice, .header-notice, .notice-bar, .notice-inside, .notice-wrapper, .notice-holder, .global-notice, #top-notice, #noticePanel, .top_notice, #bottom_notice, #Notices, .Notices, #notice{'+dni+'}');
	else if (hostname.indexOf('9am.ro')>-1)
		addCssToDocument('#ictsuc_block{'+dni+'}');
	else if (hostname.indexOf('9maand.be')>-1)
		addCssToDocument('.flashup{'+dni+'}');
	else if (hostname.indexOf('abandomoviez.net')>-1)
		addCssToDocument('.alert-danger{'+dni+'}');
	else if (hostname.indexOf('abbeyroad.com')>-1)
		addCssToDocument('#popupCookies{'+dni+'}');
	else if (hostname.indexOf('abdlfactory.com')>-1)
		addCssToDocument('#trumpet_message{'+dni+'}');
	else if (hostname.indexOf('aberdeenplumberservices.co.uk')>-1)
		addCssToDocument('#FISLCC{'+dni+'}');
	else if (hostname.indexOf('about.com')>-1)
		addCssToDocument('#ribbon-notification{'+dni+'}');
	else if (hostname.indexOf('abp.nl')>-1)
		addCssToDocument('#nyroModalFull{'+dni+'}');
	else if (hostname.indexOf('accuweather.com')>-1)
		addCssToDocument('#eu-cookie-notify-wrap{'+dni+'}');
	else if (hostname.indexOf('actu-environnement.com')>-1)
		addCssToDocument('#informations-cookies{'+dni+'}');
	else if (hostname.indexOf('ad-hoc-news.de')>-1)
		addCssToDocument('#cookie{'+dni+'}');
	else if (hostname.indexOf('adlibris.com')>-1)
		addCssToDocument('#cookie-information-banner{'+dni+'}');
	else if (hostname.indexOf('agynamix.de')>-1)
		addCssToDocument('#cookie{'+dni+'}');
	else if (hostname.indexOf('airvpn.org')>-1)
		addCssToDocument("div[style*='width:800px']{'+dni+'}");
	else if (hostname.indexOf('alinea.fr')>-1)
		addCssToDocument('.cookies-notice-msg{'+dni+'}');
	else if (hostname.indexOf('allegro.pl')>-1)
		addCssToDocument('.vela .cookie-policy-banner{'+dni+'}');
	else if (hostname.indexOf('allocine.fr')>-1)
		addCssToDocument('.info-cookie{'+dni+'}');
	else if (hostname.indexOf('allrecipes.co.uk')>-1)
		addCssToDocument('#cookiePopupContainer{'+dni+'}');
	else if (hostname.indexOf('altfordamerne.dk')>-1)
		addCssToDocument('.content{'+dni+'}');
	else if (hostname.indexOf('ancestry.co.uk')>-1)
		addCssToDocument('#Banner_50001,#Banner_cookie_1{'+dni+'}');
	else if (hostname.indexOf('androidmagazine.pl')>-1)
		addCssToDocument('div[style="position: fixed; bottom: 0px; padding-top: 10px; padding-right: 30px; padding-bottom: 10px; padding-left: 30px; z-index: 10000; background-attachment: scroll; background-repeat: repeat; background-image: none; background-position: 0% 0%; background-size: auto; background-origin: padding-box; background-clip: border-box; background-color: rgb(255, 255, 255); box-shadow: 0px 0px 10px rgb(102, 102, 102); width: 100%; box-sizing: border-box;"]{'+dni+'}');
	else if (hostname.indexOf('android.com.pl')>-1)
		addCssToDocument('div[class^="pea_cook_wrapper"]{'+dni+'}');
	else if (hostname.indexOf('anglianwater.co.uk')>-1)
		addCssToDocument('#ctl00_pnlCookie{'+dni+'}');
	else if (hostname.indexOf('answers.microsoft.com')>-1)
		addCssToDocument('#PrivacyBanner{'+dni+'}');
	else if (hostname.indexOf('antikvarium.hu')>-1)
		addCssToDocument('div[class="eupopup-container eupopup-container-bottom eupopup-color-default"]{'+dni+'}');
	else if (hostname.indexOf('appszoom.com')>-1)
		addCssToDocument('.js-toast-cookies{'+dni+'}');
	else if (hostname.indexOf('area-codes.org.uk')>-1)
		addCssToDocument('#wsjconsent{'+dni+'}');
	else if (hostname.indexOf('argenta.be')>-1)
		addCssToDocument('.ag-cookie-policy-wrapper{'+dni+'}');
	else if (hostname.indexOf('arla.dk')>-1)
		addCssToDocument('#Container,.cookie-popup__content,.cookie-popup__heading{'+dni+'}');
	else if (hostname.indexOf('arla.no')>-1)
		addCssToDocument('#Container{'+dni+'}');
	else if (hostname.indexOf('arm.com')>-1)
		addCssToDocument('#cookiemodule{'+dni+'}');
	else if (hostname.indexOf('arte.tv')>-1)
		addCssToDocument('#arte-cookie-banner{'+dni+'}');
	else if (hostname.indexOf('asda.com,#P.cookiesWarning')>-1)
		addCssToDocument('#FT_Cookies{'+dni+'}');
	else if (hostname.indexOf('askmen.com')>-1)
		addCssToDocument('#policyNotice{'+dni+'}');
	else if (hostname.indexOf('astrazeneca.com')>-1)
		addCssToDocument('#cookie-disclaimer{'+dni+'}');
/*	else if (hostname.indexOf('astroflesz.pl')>-1)
		addCssToDocument('div[id="cookies-message-container"],div[id="cookies-message"],#accept-cookies-checkbox{'+dni+'}'); // TODO */
	else if (hostname.indexOf('atletski-klub-olimpija.si')>-1)
		addCssToDocument('.activebar-container{'+dni+'}');
	else if (hostname.indexOf('atman.pl')>-1)
		addCssToDocument('#gbpl_oba,.polityka-cookie{'+dni+'}');
	else if (hostname.indexOf('atv.hu')>-1)
		addCssToDocument('div[id="cookie-warning"]{'+dni+'}');
	else if (hostname.indexOf('audion.com')>-1)
		addCssToDocument('#cc-cookie,#cc-cookies{'+dni+'}');
	else if (hostname.indexOf('auto-ici.fr')>-1)
		addCssToDocument('#close_cnil{'+dni+'}');
	else if (hostname.indexOf('automotorsport.se')>-1)
		addCssToDocument('.alert,.alert.alert-info.page-alert{'+dni+'}');
	else if (hostname.indexOf('autotask.com')>-1)
		addCssToDocument('.jsEnabled.alertbar-bottom.alertbar{'+dni+'}');
	else if (hostname.indexOf('autotrader.co.uk')>-1)
		addCssToDocument('.cookieinfo,.avanzabank_cookie_message.cookieMessage{'+dni+'}');
	else if (hostname.indexOf('aviva.co.uk')>-1)
		addCssToDocument('.cookiePopUp{'+dni+'}');
	else if (hostname.indexOf('b3ta.com')>-1)
		addCssToDocument('#cookiewarn{'+dni+'}');
	else if (hostname.indexOf('bamse.se')>-1)
		addCssToDocument('.alert.alert-info.page-alert{'+dni+'}');
	else if (hostname.indexOf('banknordik.dk')>-1)
		addCssToDocument('#cookieWarningDiv{'+dni+'}');
	else if (hostname.indexOf('bankofengland.co.uk')>-1)
		addCssToDocument('.container-notifications{'+dni+'}');
	else if (hostname.indexOf('baon.hu')>-1)
		addCssToDocument('div[class="allow-cookie-stripe"]{'+dni+'}');
	else if (hostname.indexOf('barbie.com')>-1)
		addCssToDocument('#eu_cookies_overlay_content{'+dni+'}');
	else if (hostname.indexOf('barclaycard.co.uk')>-1)
		addCssToDocument('#cookiesMessageBanner,.js-cookie-message{'+dni+'}');
	else if (hostname.indexOf('barclays.co.uk')>-1)
		addCssToDocument('P.otm{'+dni+'}');
	else if (hostname.indexOf('bbc.co.uk')>-1)
		addCssToDocument('#bbccookies{'+dni+'}');
	else if (hostname.indexOf('bbcgoodfood.com')>-1)
		addCssToDocument('.cookie-law{'+dni+'}');
	else if (hostname.indexOf('beatsbydre.com')>-1)
		addCssToDocument('.brand_drawer,#brand_drawer{'+dni+'}');
	else if (hostname.indexOf('bedetheque.com')>-1)
		addCssToDocument('.cookie_message{'+dni+'}');
	else if (hostname.indexOf('beepworld.de')>-1)
		addCssToDocument('#bw_cookiechoice{'+dni+'}');
	else if (hostname.indexOf('belkin.com')>-1)
		addCssToDocument('.pb-copy{'+dni+'}');
	else if (hostname.indexOf('berubambi.hr')>-1)
		addCssToDocument('div#cookieMessageOuter{'+dni+'}');
	else if (hostname.indexOf('bestbyte.hu')>-1)
		addCssToDocument('div[id="vscookieAlertCont"]{'+dni+'}');
	else if (hostname.indexOf('betfair.com')>-1)
		addCssToDocument('.footer-cookies-policy{'+dni+'}');
	else if (hostname.indexOf('bfmtv.com')>-1)
		addCssToDocument('#conteneurCookies{'+dni+'}');
	else if (hostname.indexOf('bibliotek.dk')>-1)
		addCssToDocument('.popup-content{'+dni+'}');
	else if (hostname.indexOf('bikebuster.dk')>-1)
		addCssToDocument('.cookiesBlock{'+dni+'}');
	else if (hostname.indexOf('bilbasen.dk')>-1)
		addCssToDocument('div[style^="position: fixed; bottom: 0px; z-index: 10000;"]{'+dni+'}');
	else if (hostname.indexOf('bing.com')>-1)
		addCssToDocument('#thp_notf_div{'+dni+'}');
	else if (hostname.indexOf('bl.dk')>-1)
		addCssToDocument('.cookie-overlay{'+dni+'}');
	else if (hostname.indexOf('blitz-cinestar.hr')>-1)
		addCssToDocument('div#cookie-inner-wrapper{'+dni+'}');
	else if (hostname.indexOf('blogger.com')>-1)
		addCssToDocument('#blogger_cookie_notice{'+dni+'}');
	else if (hostname.indexOf('blog.hu')>-1)
		addCssToDocument('div[id="_iph_cp_popup"]{'+dni+'}');
	else if (hostname.indexOf('blogs.mediapart.fr')>-1)
		addCssToDocument('.bust,.cookie-warn,.cookie-warn-msg{'+dni+'}');
	else if (hostname.indexOf('bm.dk')>-1)
		addCssToDocument('#CookiePanel{'+dni+'}');
	else if (hostname.indexOf('boingtv.fr')>-1)
		addCssToDocument('#sliding-popup{'+dni+'}');
	else if (hostname.indexOf('bol.com')>-1)
		addCssToDocument('#top_header_cookie_message{'+dni+'}');
	else if (hostname.indexOf('boligejer.dk')>-1)
		addCssToDocument('.eksCookieContainer{'+dni+'}');
	else if (hostname.indexOf('bona.com')>-1)
		addCssToDocument('.cookie{'+dni+'}');
	else if (hostname.indexOf('boomerangtv.co.uk')>-1)
		addCssToDocument('#sliding-popup{'+dni+'}');
	else if (hostname.indexOf('boomerangtv.fr')>-1)
		addCssToDocument('.cookie_popup{'+dni+'}');
	else if (hostname.indexOf('borsen.dk')>-1)
		addCssToDocument('.cookie-new{'+dni+'}');
	else if (hostname.indexOf('borsonline.hu')>-1)
		addCssToDocument('div[id="pCookieWarning"]{'+dni+'}');
	else if (hostname.indexOf('bouyguestelecom.fr')>-1)
		addCssToDocument('#no-cookie{'+dni+'}');
	else if (hostname.indexOf('box.com')>-1)
		addCssToDocument('#sliding-popup{'+dni+'}');
	else if (hostname.indexOf('breakbeat.co.uk')>-1)
		addCssToDocument('#CookieInformation{'+dni+'}');
	else if (hostname.indexOf('brick.pl')>-1)
		addCssToDocument('#ck_dsclr{'+dni+'}');
	else if (hostname.indexOf('bridgnorthjournal.com')>-1)
		addCssToDocument('div[style="position: relative; padding: 7px 50px 7px 0px; margin: 14px auto; border: 1px solid rgb(204, 204, 204); background-color: rgb(238, 238, 238);"]{'+dni+'}');
	else if (hostname.indexOf('brighton.ac.uk')>-1)
		addCssToDocument('#cookiez{'+dni+'}');
	else if (hostname.indexOf('britannia.co.uk')>-1)
		addCssToDocument('#noticePanel{'+dni+'}');
	else if (hostname.indexOf('britishmuseum.org')>-1)
		addCssToDocument('#cookiePromptWrapper{'+dni+'}');
	else if (hostname.indexOf('btsearch.pl')>-1)
		addCssToDocument('#cookieWarning,#CookielawBanner{'+dni+'}');
	else if (hostname.indexOf('bundlestars.com')>-1)
		addCssToDocument('consent[class="ng-isolate-scope"]{'+dni+'}');
	else if (hostname.indexOf('burze.dzis.net')>-1)
		addCssToDocument('#zasady_informacja{'+dni+'}');
	else if (hostname.indexOf('cadbury.co.uk')>-1)
		addCssToDocument('#_CookieText{'+dni+'}');
	else if (hostname.indexOf('ca-nord-est.fr')>-1)
		addCssToDocument('.recocliv2{'+dni+'}');
	else if (hostname.indexOf('cantine-gamelle.fr')>-1)
		addCssToDocument('#AvisoCookieslaw{'+dni+'}');
	else if (hostname.indexOf('captchme.com')>-1)
		addCssToDocument('.fade.sticky.alert-cnil.msgAlert{'+dni+'}');
	else if (hostname.indexOf('car2go.com')>-1)
		addCssToDocument('#c2g_cookie_dialog{'+dni+'}');
	else if (hostname.indexOf('carrefour.fr')>-1)
		addCssToDocument('#cookie-block,.cookie-bottom{'+dni+'}');
	else if (hostname.indexOf('cartoonito.co.uk')>-1)
		addCssToDocument('#sliding-popup{'+dni+'}');
	else if (hostname.indexOf('cartoonnetwork.co.uk')>-1)
		addCssToDocument('#sliding-popup{'+dni+'}');
	else if (hostname.indexOf('cartoonnetwork.es')>-1)
		addCssToDocument('#sliding-popup{'+dni+'}');
	else if (hostname.indexOf('cartoonnetwork.fr')>-1)
		addCssToDocument('#sliding-popup{'+dni+'}');
	else if (hostname.indexOf('castrol.com')>-1)
		addCssToDocument('.nv-cookie-notification{'+dni+'}');
	else if (hostname.indexOf('catalink.com')>-1)
		addCssToDocument('.ui-dialog{'+dni+'}');
	else if (hostname.indexOf('caterersearch.com')>-1)
		addCssToDocument('#rbiCookiePolicy_mainInformation{'+dni+'}');
	else if (hostname.indexOf('cavendishonline.co.uk')>-1)
		addCssToDocument('#cookie-compliance{'+dni+'}');
	else if (hostname.indexOf('cbronline.com')>-1)
		addCssToDocument('#privacy_content{'+dni+'}');
	else if (hostname.indexOf('cc.au.dk')>-1)
		addCssToDocument('#au_cookiesalert{'+dni+'}');
	else if (hostname.indexOf('ceneo.pl')>-1)
		addCssToDocument('#js_cookie-monster{'+dni+'}');
	else if (hostname.indexOf('change.org')>-1)
		addCssToDocument('.flash-message.flash-message-announcement{'+dni+'}');
	else if (hostname.indexOf('channel4.com')>-1)
		addCssToDocument('.all4nav-cookie-policy-notification,.cookie-policy-alert{'+dni+'}');
	else if (hostname.indexOf('chefkoch.de')>-1)
		addCssToDocument('#ck-cookie-statement{'+dni+'}');
	else if (hostname.indexOf('channelregister.co.uk')>-1)
		addCssToDocument('#RegCCO{'+dni+'}');
	else if (hostname.indexOf('chomikuj.pl')>-1)
		addCssToDocument('.cookiesInfo{'+dni+'}');
	else if (hostname.indexOf('cineworld.co.uk')>-1)
		addCssToDocument('.notification.cookie{'+dni+'}');
	else if (hostname.indexOf('citymarket.fi')>-1)
		addCssToDocument('#cookie-warn{'+dni+'}');
	else if (hostname.indexOf('cityoflondon.gov.uk')>-1)
		addCssToDocument('.container-floating-notifications{'+dni+'}');
	else if (hostname.indexOf('claireperry.org.uk')>-1)
		addCssToDocument('#blanket,#message{'+dni+'}');
	else if (hostname.indexOf('clarkewillmott.com')>-1)
		addCssToDocument('#cookiestext{'+dni+'}');
	else if (hostname.indexOf('clickandbuy.com')>-1)
		addCssToDocument('.cookie-notifier-text{'+dni+'}');
	else if (hostname.indexOf('clubic.com')>-1)
		addCssToDocument('#cookieu_header{'+dni+'}');
	else if (hostname.indexOf('cofunds.co.uk')>-1)
		addCssToDocument('.idrPageRow[style^="min-height:0;height:auto;padding:0;position:relative;z-index:1;zoom:1;border:none;"]{'+dni+'}');
	else if (hostname.indexOf('coinc.es')>-1)
		addCssToDocument('#divCookie{'+dni+'}');
	else if (hostname.indexOf('comixology.fr')>-1)
		addCssToDocument('#cookieAcknowledgement{'+dni+'}');
	else if (hostname.indexOf('commentcamarche.net')>-1)
		addCssToDocument('.ccmcss_oic{'+dni+'}');
	else if (hostname.indexOf('communauto.com')>-1)
		addCssToDocument('.cookies{'+dni+'}');
	else if (hostname.indexOf('computertotaal.nl')>-1)
		addCssToDocument('#idg-cookie-bar{'+dni+'}');
	else if (hostname.indexOf('computerworld.dk')>-1)
		addCssToDocument('#rolloverBanner{'+dni+'}');
	else if (hostname.indexOf('concertolive.co.uk')>-1)
		addCssToDocument('.divCookieWarning{'+dni+'}');
	else if (hostname.indexOf('co-operativebank.co.uk')>-1)
		addCssToDocument('#noticePanel{'+dni+'}');
	else if (hostname.indexOf('coreight.com')>-1)
		addCssToDocument('#sliding-popup{'+dni+'}');
	else if (hostname.indexOf('couchsurfing.com')>-1)
		addCssToDocument('.is-hidden{'+dni+'}');
	else if (hostname.indexOf('cpc.farnell.com')>-1)
		addCssToDocument('#mktg_Cookie_Wrap{'+dni+'}');
	else if (hostname.indexOf('cpr.dk')>-1)
		addCssToDocument('[class="alert alert-info no-cookies"]{'+dni+'}');
	else if (hostname.indexOf('crocs.de')>-1)
		addCssToDocument('.intercept-content,.intercept-spacer{'+dni+'}');
	else if (hostname.indexOf('crucial.com')>-1)
		addCssToDocument('.cookieInfo{'+dni+'}');
	else if (hostname.indexOf('csl-computer.com')>-1)
		addCssToDocument('#notification{'+dni+'}');
	else if (hostname.indexOf('dailymotion.com')>-1)
		addCssToDocument('.sd_cookiespolicy,.cookie_policy{'+dni+'}');
	else if (hostname.indexOf('data.gov.uk')>-1)
		addCssToDocument('#sliding-popup{'+dni+'}');
	else if (hostname.indexOf('datormagazin.se')>-1)
		addCssToDocument('#AdBlockerInfo{'+dni+'}');
	else if (hostname.indexOf('davidlloyd.co.uk')>-1)
		addCssToDocument('#home-cookie2{'+dni+'}');
	else if (hostname.indexOf('dawsonera.com')>-1)
		addCssToDocument('.cc-cookies-container{'+dni+'}');
	else if (hostname.indexOf('dba.dk')>-1)
		addCssToDocument('div[style^="position: fixed; bottom: 0px; z-index: 10000;"]{'+dni+'}');
	else if (hostname.indexOf('debenhams.com')>-1)
		addCssToDocument('#debCNinfo{'+dni+'}');
	else if (hostname.indexOf('decathlon.co.hu')>-1)
		addCssToDocument('div[id="cookie"]{'+dni+'}');
	else if (hostname.indexOf('degulesider.dk')>-1)
		addCssToDocument('.cookies-info{'+dni+'}');
	else if (hostname.indexOf('demotywatory.pl')>-1)
		addCssToDocument('div[style^="position: fixed; left:0; right:0; bottom:0"]{'+dni+'}');
	else if (hostname.indexOf('developpez.com')>-1)
		addCssToDocument('#gabarit_cnilcookie{'+dni+'}');
	else if (hostname.indexOf('devianne.com')>-1)
		addCssToDocument('#avertissement_cookies{'+dni+'}');
	else if (hostname.indexOf('diabetes.org.uk')>-1)
		addCssToDocument('#policyPopup{'+dni+'}');
	else if (hostname.indexOf('divany.hu')>-1)
		addCssToDocument('div[id="_iph_cp_popup"]{'+dni+'}');
	else if (hostname.indexOf('diy.com')>-1)
		addCssToDocument('#noScriptCookies{'+dni+'}');
	else if (hostname.indexOf('dmi.dk')>-1)
		addCssToDocument('.content{'+dni+'}');
	else if (hostname.indexOf('dnevnik.hr')>-1)
		addCssToDocument('#cookieMon{'+dni+'}');
	else if (hostname.indexOf('dobreprogramy.pl')>-1)
		addCssToDocument('#cookiesPanel{'+dni+'}');
	else if (hostname.indexOf('dolce-gusto.co.uk')>-1)
		addCssToDocument('#nimgrowler{'+dni+'}');
	else if (hostname.indexOf('dostavanadom.com')>-1)
		addCssToDocument('#cookies{'+dni+'}');
	else if (hostname.indexOf('domtel.com.pl')>-1)
		addCssToDocument('div#cookie-box{'+dni+'}');
	else if (hostname.indexOf('dr.dk')>-1)
		addCssToDocument('div[class="cookie-info-box"],.dr-cookie-info-box,.dr-infobox{'+dni+'}');
	else if (hostname.indexOf('drinkaware.co.uk')>-1)
		addCssToDocument('.cookie-check{'+dni+'}');
	else if (hostname.indexOf('drive24.co.uk')>-1)
		addCssToDocument('#cookieHeader{'+dni+'}');
	else if (hostname.indexOf('drweb.de')>-1)
		addCssToDocument('.pea_cook_wrapper.pea_cook_bottomright{'+dni+'}');
	else if (hostname.indexOf('duden.de')>-1)
		addCssToDocument('#sliding-popup{'+dni+'}');
	else if (hostname.indexOf('duf.dk')>-1)
		addCssToDocument('.tx-tc-cookie{'+dni+'}');
	else if (hostname.indexOf('dutchnews.nl')>-1)
		addCssToDocument('.cookiepolicy{'+dni+'}');
	else if (hostname.indexOf('eadt.co.uk')>-1)
		addCssToDocument('#cookielaw2{'+dni+'}');
	else if (hostname.indexOf('economist.com')>-1)
		addCssToDocument('#ec-cookie-messages-container,#ec-message-1,#ec-message-2,#ec-message-3{'+dni+'}');
	else if (hostname.indexOf('edexcel.com')>-1)
		addCssToDocument('#cookiemsgbox{'+dni+'}');
	else if (hostname.indexOf('edigital.hu')>-1)
		addCssToDocument('div[id="hr_cookie_policy_message"]{'+dni+'}');
	else if (hostname.indexOf('edition.cnn.com')>-1)
		addCssToDocument('.user-msg{'+dni+'}');
	else if (hostname.indexOf('edp24.co.uk')>-1)
		addCssToDocument('#cookielaw2{'+dni+'}');
	else if (hostname.indexOf('ee.co.uk')>-1)
		addCssToDocument('#ee-cookies-message{'+dni+'}');
	else if (hostname.indexOf('egmont.pl')>-1)
		addCssToDocument('#cookieMsg{'+dni+'}');
	else if (hostname.indexOf('ekstrabladet.dk')>-1)
		addCssToDocument('.cookiedisclaimer{'+dni+'}');
	else if (hostname.indexOf('ekupi.hr')>-1)
		addCssToDocument('#ctl00_cookieDiv{'+dni+'}');
	else if (hostname.indexOf('elasticsearch.org')>-1)
		addCssToDocument('#cookie{'+dni+'}');
	else if (hostname.indexOf('eldiario.es')>-1)
		addCssToDocument('#headerCookiesAdvice{'+dni+'}');
	else if (hostname.indexOf('eldos.com')>-1)
		addCssToDocument('.cookie_warning{'+dni+'}');
	else if (hostname.indexOf('elections2014.eu')>-1)
		addCssToDocument('div[style="bottom: 0px;"]{'+dni+'}');
	else if (hostname.indexOf('elgiganten.dk')>-1)
		addCssToDocument('#cookieinfobox,.transbox{'+dni+'}');
	else if (hostname.indexOf('elkjop.no')>-1)
		addCssToDocument('.cookie-info-layer{'+dni+'}');
	else if (hostname.indexOf('elle.fr')>-1)
		addCssToDocument('#c_agrem{'+dni+'}');
	else if (hostname.indexOf('elpais.com')>-1)
		addCssToDocument('#capaAvisoPoliticaCookies_superior_mensajes{'+dni+'}');
	else if (hostname.indexOf('empireonline.com')>-1)
		addCssToDocument('#bauerCookiePolicy{'+dni+'}');
	else if (hostname.indexOf('eniro.se')>-1)
		addCssToDocument('.cookies-info-static{'+dni+'}');
	else if (hostname.indexOf('ennaranja.com')>-1)
		addCssToDocument('.cookies-overlay{'+dni+'}');
	else if (hostname.indexOf('en.valenciacf.com')>-1)
		addCssToDocument('#cookies_ask{'+dni+'}');
	else if (hostname.indexOf('epson.fr')>-1)
		addCssToDocument('.epson_cookienotice{'+dni+'}');
	else if (hostname.indexOf('esbe.eu')>-1)
		addCssToDocument('.header-cookie-content{'+dni+'}');
	else if (hostname.indexOf('espn.co.uk')>-1)
		addCssToDocument('.cookie-overlay{'+dni+'}');
	else if (hostname.indexOf('esprit.de')>-1)
		addCssToDocument('#policy_header{'+dni+'}');
	else if (hostname.indexOf('e-systems.ro')>-1)
		addCssToDocument('#cookie-info-div{'+dni+'}');
	else if (hostname.indexOf('etel-tuning.eu')>-1)
		addCssToDocument('#cookieNoticeContent{'+dni+'}');
	else if (hostname.indexOf('eu.battle.net')>-1)
		addCssToDocument('#eu-cookie-compliance{'+dni+'}');
	else if (hostname.indexOf('eudict.com')>-1)
		addCssToDocument('.cookieNotice{'+dni+'}');
	else if (hostname.indexOf('euro.com.pl')>-1) {
		if (hostname.indexOf('m.euro.com.pl')>-1)
			addCssToDocument('#notifyCookie .notifyCookieWrap{'+dni+'}');
		else
			addCssToDocument('#cookie-bar p{'+dni+'}');
	}
	else if (hostname.indexOf('eurodns.com')>-1)
		addCssToDocument('#cookies-bar{'+dni+'}');
	else if (hostname.indexOf('euroman.dk')>-1)
		addCssToDocument('.content{'+dni+'}');
	else if (hostname.indexOf('europarl.org.uk')>-1)
		addCssToDocument('.cookies-message{'+dni+'}');
	else if (hostname.indexOf('europeantour.com')>-1)
		addCssToDocument('#modalCookieContainer{'+dni+'}');
	else if (hostname.indexOf('eurowoman.dk')>-1)
		addCssToDocument('.content{'+dni+'}');
	else if (hostname.indexOf('evm.dk')>-1)
		addCssToDocument('#cookies-acc{'+dni+'}');
	else if (hostname.indexOf('eveningtelegraph.co.uk')>-1)
		addCssToDocument('.notification{'+dni+'}');
	else if (hostname.indexOf('extremoduro.com')>-1)
		addCssToDocument('#dvCookie.cookiesms{'+dni+'}');
	else if (hostname.indexOf('ey.com')>-1)
		addCssToDocument('.cookienote{'+dni+'}');
	else if (hostname.indexOf('facebook.com')>-1)
		addCssToDocument('.pam.fbPageBanner._3d9x.uiBoxGray.bottomborder{'+dni+'}');
	else if (hostname.indexOf('fasthosts.co.uk')>-1)
		addCssToDocument('#cookie{'+dni+'}');
	else if (hostname.indexOf('fatbeehive.com')>-1)
		addCssToDocument('div[style^="background-color: #000;"]{'+dni+'}');
	else if (hostname.indexOf('fcbarcelona.com')>-1)
		addCssToDocument('#notificacio-cookies{'+dni+'}');
	else if (hostname.indexOf('fcomputer.dk')>-1)
		addCssToDocument('#jumper_cookies{'+dni+'}');
	else if (hostname.indexOf('fedex.com')>-1)
		addCssToDocument('#privacy-notice{'+dni+'}');
	else if (hostname.indexOf('femina.hu')>-1)
		addCssToDocument('div[id="_iph_cp_popup"]{'+dni+'}');
	else if (hostname.indexOf('fgov.be')>-1)
		addCssToDocument('#perBoxUI{'+dni+'}');
	else if (hostname.indexOf('fhm.com')>-1)
		addCssToDocument('#bauerCookiePolicy{'+dni+'}');
	else if (hostname.indexOf('filmaffinity.com')>-1)
		addCssToDocument('#info-cookie{'+dni+'}');
	else if (hostname.indexOf('filmweb.pl')>-1)
		addCssToDocument('.topBarCont{'+dni+'}');
	else if (hostname.indexOf('findmypast.co.uk')>-1)
		addCssToDocument('#cookie-dropdown{'+dni+'}');
	else if (hostname.indexOf('fliegen-usa.de')>-1)
		addCssToDocument('#cc-cookie-law{'+dni+'}');
	else if (hostname.indexOf('focusrite.com')>-1)
		addCssToDocument('#sliding-popup{'+dni+'}');
	else if (hostname.indexOf('folkuniversitetet.se')>-1)
		addCssToDocument('.alert{'+dni+'}');
	else if (hostname.indexOf('fool.co.uk')>-1)
		addCssToDocument('#dogfish{'+dni+'}');
	else if (hostname.indexOf('forbrug.dk')>-1)
		addCssToDocument('.CookieChoiceContainer.nocontent{'+dni+'}');
	else if (hostname.indexOf('ford.co.uk')>-1)
		addCssToDocument('#cookieAlertBoxID{'+dni+'}');
	else if (hostname.indexOf('forumcommunity.net')>-1)
		addCssToDocument('.jnote{'+dni+'}');
	else if (hostname.indexOf('forum.dvhk.to')>-1)
		addCssToDocument('#CookieKomunikat{'+dni+'}');
	else if (hostname.indexOf('fotka.com')>-1)
		addCssToDocument('#cookies_info{'+dni+'}');
	else if (hostname.indexOf('france5.fr')>-1)
		addCssToDocument('#cookie-cnil-box{'+dni+'}');
	else if (hostname.indexOf('freeview.co.uk')>-1)
		addCssToDocument('#cookie-panel{'+dni+'}');
	else if (hostname.indexOf('fundamenta.hu')>-1)
		addCssToDocument('div[class="cookie-acceptance-container"]{'+dni+'}');
	else if (hostname.indexOf('fundingcircle.com')>-1)
		addCssToDocument('.is-visible.notification_wrap{'+dni+'}');
	else if (hostname.indexOf('furniturevillage.co.uk')>-1)
		addCssToDocument('#SiteMasterPage_updCookieDisclaimer{'+dni+'}');
	else if (hostname.indexOf('futura-sciences.com')>-1)
		addCssToDocument('#fs-cookiewarning{'+dni+'}');
	else if (hostname.indexOf('fz.se')>-1)
		addCssToDocument('#AdBlockerInfo.cookie-container{'+dni+'}');
	else if (hostname.indexOf('gambleaware.co.uk')>-1)
		addCssToDocument('#ccWrappery{'+dni+'}');
	else if (hostname.indexOf('gamblingcommission.gov.uk')>-1)
		addCssToDocument('.cookiedOuter{'+dni+'}');
	else if (hostname.indexOf('gamemania.be')>-1)
		addCssToDocument('#globalmessage{'+dni+'}');
	else if (hostname.indexOf('gamepressure.com')>-1)
		addCssToDocument('#CP_box{'+dni+'}');
	else if (hostname.indexOf('gamereactor.dk')>-1)
		addCssToDocument('#cookielawwarning{'+dni+'}');
	else if (hostname.indexOf('gamespy.com')>-1)
		addCssToDocument('#policy{'+dni+'}');
	else if (hostname.indexOf('gamesradar.com')>-1)
		addCssToDocument('#future-cookie-bar{'+dni+'}');
	else if (hostname.indexOf('gearslutz.com')>-1)
		addCssToDocument('#navbar_notice_60.navbar_notice{'+dni+'}');
	else if (hostname.indexOf('gendiagnosztika.hu')>-1)
		addCssToDocument('div[class^="pea_cook_wrapper"]{'+dni+'}');
	else if (hostname.indexOf('giffgaff.com')>-1)
		addCssToDocument('#cookies-modal{'+dni+'}');
	else if (hostname.indexOf('gigaom.com')>-1)
		addCssToDocument('.privacy-policy{'+dni+'}');
	else if (hostname.indexOf('gizmodo.co.uk')>-1)
		addCssToDocument('.future-cookie-bar{'+dni+'}');
	else if (hostname.indexOf('glee.co.uk')>-1)
		addCssToDocument('#bf-cookie-notice{'+dni+'}');
	else if (hostname.indexOf('gmx.com')>-1)
		addCssToDocument('.mod-cookiepolicy,.mod-cookiepolicy.mod{'+dni+'}');
	else if (hostname.indexOf('gocompare.com')>-1)
		addCssToDocument('.CookiePolicyContainer{'+dni+'}');
	else if (hostname.indexOf('goldenline.pl')>-1)
		addCssToDocument('#topReminder{'+dni+'}');
	else if (hostname.indexOf('golem.de')>-1)
		addCssToDocument('#golem-cookie-accept{'+dni+'}');
	else if (hostname.indexOf('google.dk')>-1)
		addCssToDocument('.fbar{'+dni+'}');
	else if (hostname.indexOf('gosc.pl')>-1)
		addCssToDocument('div[style^="border: 10px solid rgb(138, 138, 138);"]{'+dni+'}');
	else if (hostname.indexOf('go.tv2.dk')>-1)
		addCssToDocument('#tv2cookiebar{'+dni+'}');
	else if (hostname.indexOf('gov.uk')>-1)
		addCssToDocument('#global-cookie-message,.js-cookies-banner{'+dni+'}');
	else if (hostname.indexOf('gp.se')>-1)
		addCssToDocument('#gpsecCookieInformationContainer{'+dni+'}');
	else if (hostname.indexOf('gqmagazine.fr')>-1)
		addCssToDocument('#cookies-message-main{'+dni+'}');
	else if (hostname.indexOf('grandidizionari.it')>-1)
		addCssToDocument('div.alertcookie{'+dni+'}');
	else if (hostname.indexOf('graspop.be')>-1)
		addCssToDocument('.s--show.cookies{'+dni+'}');
	else if (hostname.indexOf('grosbill.com')>-1)
		addCssToDocument('#cnil_bar{'+dni+'}');
	else if (hostname.indexOf('groupalia.com')>-1)
		addCssToDocument('.wrapperCookies{'+dni+'}');
	else if (hostname.indexOf('group.barclays.com')>-1)
		addCssToDocument('#cookiesInitialDialog,.dialogMask{'+dni+'}');
	else if (hostname.indexOf('groupe-logos.com')>-1)
		addCssToDocument("div[style*='z-index: 1000;']{'+dni+'}");
	else if (hostname.indexOf('groupon.co.uk')>-1 || hostname.indexOf('groupon.ie')>-1)
		addCssToDocument("#ls-cookie-banner{'+dni+'}");
	else if (hostname.indexOf('gry.pl')>-1)
		addCssToDocument('.m-cookiebar{'+dni+'}');
	else if (hostname.indexOf('gsmarena.com')>-1)
		addCssToDocument('.cc_container{'+dni+'}');
	else if (hostname.indexOf('guardian.co.uk')>-1)
		addCssToDocument('.identity-noticebar,.identity-noticebar-content{'+dni+'}');
	else if (hostname.indexOf('guloggratis.dk')>-1)
		addCssToDocument('#cookie_container{'+dni+'}');
	else if (hostname.indexOf('hankzipzer.co.uk')>-1)
		addCssToDocument('#cppd{'+dni+'}');
	else if (hostname.indexOf('hannovermesse.de')>-1)
		addCssToDocument('.row.user-notes-notification.M011{'+dni+'}');
	else if (hostname.indexOf('hasznaltauto.hu')>-1)
		addCssToDocument('div[id="cookieAcceptContainer"]{'+dni+'}');
	else if (hostname.indexOf('hastoe.com')>-1)
		addCssToDocument('#ctl00_CookieMessage1_upCookie{'+dni+'}');
	else if (hostname.indexOf('hattrick.org')>-1)
		addCssToDocument('.alert{'+dni+'}');
	else if (hostname.indexOf('hcrfm.co.uk')>-1)
		addCssToDocument('#cj-tab-title{'+dni+'}');
	else if (hostname.indexOf('heart.co.uk')>-1)
		addCssToDocument('#cookie_bar{'+dni+'}');
	else if (hostname.indexOf('hellobank.it')>-1)
		addCssToDocument('#infoCookie{'+dni+'}');
	else if (hostname.indexOf('heltnormalt.dk')>-1)
		addCssToDocument('.banner,.banner-container{'+dni+'}');
	else if (hostname.indexOf('here.com')>-1)
		addCssToDocument('.notification_box.ng-isolate-scope.cookie{'+dni+'}');
	else if (hostname.indexOf('hfiles.ro')>-1)
		addCssToDocument('.cc_banner-wrapper{'+dni+'}');
	else if (hostname.indexOf('hintaseuranta.fi')>-1)
		addCssToDocument('#cookies-info-banner{'+dni+'}');
	else if (hostname.indexOf('hirado.hu')>-1)
		addCssToDocument('#cookie{'+dni+'}');
	else if (hostname.indexOf('hm.com')>-1)
		addCssToDocument('section[class="cookie-notification"]{'+dni+'}');
	else if (hostname.indexOf('hmrc.gov.uk')>-1)
		addCssToDocument('#CookieReportsPanel{'+dni+'}');
	else if (hostname.indexOf('horoscope.fr')>-1)
		addCssToDocument('#useCookiesCont{'+dni+'}');
	else if (hostname.indexOf('hotelgranvia.com')>-1)
		addCssToDocument('#lc_cookies-main{'+dni+'}');
	else if (hostname.indexOf('hp.com')>-1)
		addCssToDocument('#cookie_privacy_holder{'+dni+'}');
	else if (hostname.indexOf('hpconnected.com')>-1)
		addCssToDocument('#cookiewrap{'+dni+'}');
	else if (hostname.indexOf('hrportal.hu')>-1)
		addCssToDocument('div[id="fixdiv"]{'+dni+'}');
	else if (hostname.indexOf('hrportfolio.hr')>-1)
		addCssToDocument('div#kolac{'+dni+'}');
	else if (hostname.indexOf('hsbc.co.uk')>-1)
		addCssToDocument('#cookieBox{'+dni+'}');
	else if (hostname.indexOf('hs.fi')>-1)
		addCssToDocument('.cb-container{'+dni+'}');
	else if (hostname.indexOf('iblanky.co.cc')>-1)
		addCssToDocument('#update{'+dni+'}');
	else if (hostname.indexOf('ico.gov.uk')>-1)
		addCssToDocument('#banner{'+dni+'}');
	else if (hostname.indexOf('ico.org.uk')>-1)
		addCssToDocument('#banner{'+dni+'}');
	else if (hostname.indexOf('ideone.com')>-1)
		addCssToDocument('#cookie-ue{'+dni+'}');
	else if (hostname.indexOf('idokep.hu')>-1)
		addCssToDocument('div[class^="cc_banner-wrapper"]{'+dni+'}');
	else if (hostname.indexOf('igen.fr')>-1)
		addCssToDocument('#sliding-popup{'+dni+'}');
	else if (hostname.indexOf('ign.com')>-1)
		addCssToDocument('#policyNotice{'+dni+'}');
	else if (hostname.indexOf('ikea.com')>-1)
		addCssToDocument('#cookieMsgBlock{'+dni+'}');
	else if (hostname.indexOf('iltalehti.fi')>-1)
		addCssToDocument('.alma-cookie-disclaimer{'+dni+'}');
	else if (hostname.indexOf('imedeen.fr')>-1)
		addCssToDocument('#cookiepolicyContainer{'+dni+'}');
	else if (hostname.indexOf('ina.fr')>-1)
		addCssToDocument('.cookies-bar{'+dni+'}');
	else if (hostname.indexOf('indavideo.hu')>-1)
		addCssToDocument('div[id="_iph_cp_popup"]{'+dni+'}');
	else if (hostname.indexOf('indema.si')>-1)
		addCssToDocument('#cookie-law-info-bar{'+dni+'}');
	else if (hostname.indexOf('index.hu')>-1)
		addCssToDocument('div[id="_iph_cp_popup"]{'+dni+'}');
	else if (hostname.indexOf('indiegogo.com')>-1)
		addCssToDocument('#fancybox-overlay,#fancybox-wrap{'+dni+'}');
	else if (hostname.indexOf('informahealthcare.com')>-1)
		addCssToDocument('.overlay,.popupContainer{'+dni+'}');
	else if (hostname.indexOf('information.dk')>-1)
		addCssToDocument('#block-inf-eu-cookie-cookie-disclaimer{'+dni+'}');
	else if (hostname.indexOf('ingdirect.es')>-1)
		addCssToDocument('#ico_banner{'+dni+'}');
	else if (hostname.indexOf('ink361.com')>-1)
		addCssToDocument('#cookieAcceptMessage{'+dni+'}');
	else if (hostname.indexOf('insidebeer.com')>-1)
		addCssToDocument('#bottomnav{'+dni+'}');
	else if (hostname.indexOf('interia.pl')>-1)
		addCssToDocument('#inpl_cp_cnt{'+dni+'}');
	else if (hostname.indexOf('investor.hu')>-1)
		addCssToDocument('div[class="accept-cookie-open"]{'+dni+'}');
	else if (hostname.indexOf('iopscience.iop.org')>-1)
		addCssToDocument('.cookies-banner-wrap{'+dni+'}');
	else if (hostname.indexOf('ipnordic.dk')>-1)
		addCssToDocument('.ultimize_cookie_notification_container{'+dni+'}');
	else if (hostname.indexOf('istockphoto.com')>-1)
		addCssToDocument('#euCookieBar{'+dni+'}');
	else if (hostname.indexOf('itele.fr')>-1)
		addCssToDocument('#cnil_alert_inner{'+dni+'}');
	else if (hostname.indexOf('itv.com')>-1)
		addCssToDocument('#itv-cookie-notification{'+dni+'}');
	else if (hostname.indexOf('jetbrains.com')>-1)
		addCssToDocument('#cookies-terminal{'+dni+'}');
	else if (hostname.indexOf('jman.tv')>-1)
		addCssToDocument('#ActionBar{'+dni+'}');
	else if (hostname.indexOf('jobindex.dk')>-1)
		addCssToDocument('.jix_acceptcookies_box{'+dni+'}');
	else if (hostname.indexOf('jobs.ac.uk')>-1)
		addCssToDocument('.eucookies{'+dni+'}');
	else if (hostname.indexOf('joemonster.org')>-1)
		addCssToDocument('div[style^="position: fixed; bottom: 0; width: 1020px; height: 100px;"]{'+dni+'}');
	else if (hostname.indexOf('johnlewis.com')>-1)
		addCssToDocument('#jlp-cookie-container,#opnotification{'+dni+'}');
	else if (hostname.indexOf('jofogas.hu')>-1)
		addCssToDocument('div[id="cookie-notif"]{'+dni+'}');
	else if (hostname.indexOf('johnredwoodsdiary.com')>-1)
		addCssToDocument('#cc-notification-wrapper{'+dni+'}');
	else if (hostname.indexOf('joomla.pl')>-1)
		addCssToDocument('#panel_cookie_dol{'+dni+'}');
	else if (hostname.indexOf('jotti.org')>-1)
		addCssToDocument('.alert-info{'+dni+'}');
	else if (hostname.indexOf('journaldunet.com')>-1)
		addCssToDocument('.ccmcss_oic{'+dni+'}');
	else if (hostname.indexOf('jrf.org.uk')>-1)
		addCssToDocument('#cookieconsent{'+dni+'}');
	else if (hostname.indexOf('juce.com')>-1)
		addCssToDocument('#sliding-popup{'+dni+'}');
	else if (hostname.indexOf('justcause.com')>-1)
		addCssToDocument('.comp.comp-notification{'+dni+'}');
	else if (hostname.indexOf('jyllands-posten.dk')>-1)
		addCssToDocument('.acceptCookiesBox{'+dni+'}');
	else if (hostname.indexOf('kalleanka.se')>-1)
		addCssToDocument('.alert,.alert.alert-info.page-alert{'+dni+'}');
	else if (hostname.indexOf('karriere.fresenius.de')>-1)
		addCssToDocument('.cookie_message_inner{'+dni+'}');
	else if (hostname.indexOf('k-citymarket.fi')>-1)
		addCssToDocument('.Pbox-sm{'+dni+'}');
	else if (hostname.indexOf('k-ex.pl')>-1)
		addCssToDocument('.RACKWrapper{'+dni+'}');
	else if (hostname.indexOf('keil.com')>-1)
		addCssToDocument('.modouter{'+dni+'}');
	else if (hostname.indexOf('ketnet.be')>-1)
		addCssToDocument('#cookie-bar-wrapper{'+dni+'}');
	else if (hostname.indexOf('king.com')>-1)
		addCssToDocument('.siteMessageContainer{'+dni+'}');
	else if (hostname.indexOf('kingston.ac.uk')>-1)
		addCssToDocument('#site-wide-cookie-message{'+dni+'}');
	else if (hostname.indexOf('kiszamolo.hu')>-1)
		addCssToDocument('div[id="cookie-warning"]{'+dni+'}');
	else if (hostname.indexOf('k-market.fi')>-1)
		addCssToDocument('.Pbox-sm{'+dni+'}');
	else if (hostname.indexOf('knaufdanoline.fr')>-1)
		addCssToDocument('#pronamic_cookie_holder{'+dni+'}');
	else if (hostname.indexOf('kodin1.com')>-1)
		addCssToDocument('#cookie-warn{'+dni+'}');
	else if (hostname.indexOf('kopalniawiedzy.pl')>-1)
		addCssToDocument('#cookie-bar{'+dni+'}');
	else if (hostname.indexOf('korben.info')>-1)
		addCssToDocument('.cookie-notice-container{'+dni+'}');
	else if (hostname.indexOf('krak.dk')>-1)
		addCssToDocument('[class="cookies-info-static"]{'+dni+'}');
	else if (hostname.indexOf('kwejk.pl')>-1)
		addCssToDocument('#cookies-politics{'+dni+'}');
	else if (hostname.indexOf('lab-project.net')>-1)
		addCssToDocument('.activebar-container{'+dni+'}');
	else if (hostname.indexOf('lagazettedescommunes.com')>-1)
		addCssToDocument('#bandeauCookies{'+dni+'}');
	else if (hostname.indexOf('large.nl')>-1)
		addCssToDocument('#cookie_law{'+dni+'}');
	else if (hostname.indexOf('larousse.fr')>-1)
		addCssToDocument('.panel-cookies{'+dni+'}');
	else if (hostname.indexOf('lastminute.com')>-1)
		addCssToDocument('.cookieBox{'+dni+'}');
	else if (hostname.indexOf('lavanguardia.com')>-1)
		addCssToDocument('#divCookiesBox{'+dni+'}');
	else if (hostname.indexOf('lavie.fr')>-1)
		addCssToDocument('#usrcookies{'+dni+'}');
	else if (hostname.indexOf('lavozdegalicia.es')>-1)
		addCssToDocument('.alert.alert-info{'+dni+'}');
	else if (hostname.indexOf('layar.com')>-1)
		addCssToDocument('.remarketing-banner.show{'+dni+'}');
	else if (hostname.indexOf('lcl.fr')>-1)
		addCssToDocument('#id\=ID_COOKIECONSENT_BANDEAU{'+dni+'}');
	else if (hostname.indexOf('ldlc.com')>-1)
		addCssToDocument('#tc_privacy{'+dni+'}');
	else if (hostname.indexOf('ldlc-pro.com')>-1)
		addCssToDocument('#container{'+dni+'}');
	else if (hostname.indexOf('leagueoflegends.com')>-1)
		addCssToDocument('#cookieCookieBar{'+dni+'}');
	else if (hostname.indexOf('leboncoin.fr')>-1)
		addCssToDocument('#cookieFrame{'+dni+'}');
	else if (hostname.indexOf('leconomic.cat')>-1)
		addCssToDocument('#avis-cookies{'+dni+'}');
	else if (hostname.indexOf('leeds.gov.uk')>-1)
		addCssToDocument('#siteStatement{'+dni+'}');
	else if (hostname.indexOf('lefigaro.fr')>-1)
		addCssToDocument('.cookieBarContainer{'+dni+'}');
	else if (hostname.indexOf('legalandgeneral.com')>-1)
		addCssToDocument('#st_box{'+dni+'}');
	else if (hostname.indexOf('lemonde.fr')>-1)
		addCssToDocument('#alerte_tracking{'+dni+'}');
	else if (hostname.indexOf('lemondeinformatique.fr')>-1)
		addCssToDocument('#infos_cookie{'+dni+'}');
	else if (hostname.indexOf('leparisien.fr')>-1)
		addCssToDocument('#topCookie{'+dni+'}');
	else if (hostname.indexOf('lepoint.fr')>-1)
		addCssToDocument('#footer-cookies{'+dni+'}');
	else if (hostname.indexOf('lequipe.fr')>-1)
		addCssToDocument('#cookiesLequipe{'+dni+'}');
	else if (hostname.indexOf('leroymerlin.fr')>-1)
		addCssToDocument('.nav-infos-wrapper{'+dni+'}');
	else if (hostname.indexOf('lesechos.fr')>-1)
		addCssToDocument('#cookiemenu{'+dni+'}');
	else if (hostname.indexOf('lesinrocks.com')>-1)
		addCssToDocument('.cnil-block{'+dni+'}');
	else if (hostname.indexOf('lesnumeriques.com')>-1)
		addCssToDocument('#notif_197{'+dni+'}');
	else if (hostname.indexOf('letelegramme.fr')>-1)
		addCssToDocument('#barre_top_secondaire,#cookieChoiceInfo{'+dni+'}');
	else if (hostname.indexOf('letudiant.fr')>-1)
		addCssToDocument('#notice-cookie-block{'+dni+'}');
	else if (hostname.indexOf('levante-emv.com')>-1)
		addCssToDocument("div[style*='bg_cookies.jpg']{'+dni+'}");
	else if (hostname.indexOf('liberation.fr')>-1)
		addCssToDocument('.cookie-notify{'+dni+'}');
	else if (hostname.indexOf('lifeboatmarketing.co.uk')>-1)
		addCssToDocument('#id_cookieconsent{'+dni+'}');
	else if (hostname.indexOf('life.hu')>-1)
		addCssToDocument('div[class="accept-cookie-open"],div[id="_iph_cp_popup"]{'+dni+'}');
	else if (hostname.indexOf('linkedin.com')>-1)
		addCssToDocument('#notice-cookie-policy{'+dni+'}');
	else if (hostname.indexOf('livecolor.co.uk')>-1)
		addCssToDocument('.cookiedisclaimer{'+dni+'}');
	else if (hostname.indexOf('livescores.com')>-1)
		addCssToDocument('.row.well.info-msg{'+dni+'}');
	else if (hostname.indexOf('llas.ac.uk')>-1)
		addCssToDocument('#sliding-popup{'+dni+'}');
	else if (hostname.indexOf('londonstockexchange.com')>-1)
		addCssToDocument('#bannerCookies{'+dni+'}');
	else if (hostname.indexOf('lonelyplanet.com')>-1)
		addCssToDocument('.row--cookie-compliance{'+dni+'}');
	else if (hostname.indexOf('loot.com')>-1)
		addCssToDocument('.ac-cl{'+dni+'}');
	else if (hostname.indexOf('lrb.co.uk')>-1)
		addCssToDocument('div[style="border-bottom:1px solid #adadad;padding:5px;background:#f4f4f4;color:#333;font:1em/1 sans-serif"]{'+dni+'}');
	else if (hostname.indexOf('lufbra.net')>-1)
		addCssToDocument('.cwcookielaw{'+dni+'}');
	else if (hostname.indexOf('macbidouille.com')>-1)
		addCssToDocument('#okookie-box{'+dni+'}');
	else if (hostname.indexOf('macg.co')>-1)
		addCssToDocument('#sliding-popup{'+dni+'}');
	else if (hostname.indexOf('macuser.de')>-1)
		addCssToDocument('.eucookie_wrapper{'+dni+'}');
	else if (hostname.indexOf('magboss.pl')>-1)
		addCssToDocument('div[class="alert alert-message alert-dismissable bs-callout-danger"]{'+dni+'}');
	else if (hostname.indexOf('magicmaman.com')>-1)
		addCssToDocument('.cookieNotification{'+dni+'}');
	else if (hostname.indexOf('ma-reduc.com')>-1)
		addCssToDocument('#about-cookies{'+dni+'}');
	else if (hostname.indexOf('marketdraytonadvertiser.com')>-1)
		addCssToDocument('div[style="position: relative; padding: 7px 50px 7px 0px; margin: 14px auto; border: 1px solid rgb(204, 204, 204); background-color: rgb(238, 238, 238);"]{'+dni+'}');
	else if (hostname.indexOf('masterofmalt.com')>-1)
		addCssToDocument('#cookiePopup{'+dni+'}');
	else if (hostname.indexOf('materiel.net')>-1)
		addCssToDocument('#cookie{'+dni+'}');
	else if (hostname.indexOf('mclaren.com')>-1)
		addCssToDocument('#block-cookie-info{'+dni+'}');
	else if (hostname.indexOf('mclarenstore.com')>-1)
		addCssToDocument('.widget-notifyBar{'+dni+'}');
	else if (hostname.indexOf('mdd.eu')>-1)
		addCssToDocument('.panel_cookie{'+dni+'}');
	else if (hostname.indexOf('mdx.ac.uk')>-1)
		addCssToDocument('#cookie{'+dni+'}');
	else if (hostname.indexOf('mediapart.fr')>-1)
		addCssToDocument('#cnil-sentence{'+dni+'}');
	else if (hostname.indexOf('mediaset.it')>-1)
		addCssToDocument('#cookieAdv{'+dni+'}');
	else if (hostname.indexOf('meinestadt.de')>-1)
		addCssToDocument('.ms-cookie-ok{'+dni+'}');
	else if (hostname.indexOf('mercialys.fr')>-1)
		addCssToDocument('.info-top{'+dni+'}');
	else if (hostname.indexOf('merlin.pl')>-1)
		addCssToDocument('.cookies_policy{'+dni+'}');
	else if (hostname.indexOf('metlife.hu')>-1)
		addCssToDocument('div[id="acceptCookieMeg"]{'+dni+'}');
	else if (hostname.indexOf('microsoft.com')>-1)
		addCssToDocument('.euCookie.mscom-alertitem,#lca-cookie-notification{'+dni+'}');
	else if (hostname.indexOf('middle-earth.xenite.org')>-1)
		addCssToDocument('.pea_cook_wrapper{'+dni+'}');
	else if (hostname.indexOf('miniclip.com')>-1)
		addCssToDocument('#eu-cookie{'+dni+'}');
	else if (hostname.indexOf('ministryofsound.com')>-1)
		addCssToDocument('#ctl00_ctl00_Cookies1_UpdatePanel1{'+dni+'}');
	else if (hostname.indexOf('mobildebat.dk')>-1)
		addCssToDocument('#cookies_info_header{'+dni+'}');
	else if (hostname.indexOf('mobile.twitter.com')>-1)
		addCssToDocument('.is-open.EuCookieSheet{'+dni+'}');
	else if (hostname.indexOf('mobistar.be')>-1)
		addCssToDocument('#sliding-popup{'+dni+'}');
	else if (hostname.indexOf('momondo.dk')>-1)
		addCssToDocument('.chrm-content{'+dni+'}');
	else if (hostname.indexOf('monbs.com')>-1)
		addCssToDocument('#cookieFooter{'+dni+'}');
	else if (hostname.indexOf('moneysavingexpert.com')>-1)
		addCssToDocument('#alertBar{'+dni+'}');
	else if (hostname.indexOf('monitor.si')>-1)
		addCssToDocument('.cookie-note-content{'+dni+'}');
	else if (hostname.indexOf('monster.co.uk')>-1)
		addCssToDocument('#intMsgCookies{'+dni+'}');
	else if (hostname.indexOf('motor-talk.de')>-1)
		addCssToDocument('#b-cc{'+dni+'}');
	else if (hostname.indexOf('mp.dk')>-1)
		addCssToDocument('.alert.alert-block.alert-info.fade.in{'+dni+'}');
	else if (hostname.indexOf('mpora.com')>-1)
		addCssToDocument('.c-cookie-policy{'+dni+'}');
	else if (hostname.indexOf('mundodeportivo.com')>-1)
		addCssToDocument('#cookies-policy-mssg{'+dni+'}');
	else if (hostname.indexOf('myspace.com')>-1)
		addCssToDocument('#siteAlert{'+dni+'}');
	else if (hostname.indexOf('narod.hr')>-1)
		addCssToDocument('#fancybox-overlay,#fancybox-wrap{'+dni+'}');
	else if (hostname.indexOf('nakedsecurity.sophos.com')>-1)
		addCssToDocument('.cc_banner-wrapper{'+dni+'}');
	else if (hostname.indexOf('nationwide.co.uk')>-1 || hostname.indexOf('nationwideinternational.com')>-1)
		addCssToDocument('#cn{'+dni+'}');
	else if (hostname.indexOf('naukawpolsce.pap.pl')>-1)
		addCssToDocument('#divcook{'+dni+'}');
	else if (hostname.indexOf('nba.com')>-1)
		addCssToDocument('#nba_tos{'+dni+'}');
	else if (hostname.indexOf('nectar.com')>-1)
		addCssToDocument('#cc-notification{'+dni+'}');
	else if (hostname.indexOf('nelly.com')>-1)
		addCssToDocument('#toast-container{'+dni+'}');
	else if (hostname.indexOf('nemid.nu')>-1)
		addCssToDocument('[class="cookie_optin_box"]{'+dni+'}');
	else if (hostname.indexOf('nerc.ac.uk')>-1)
		addCssToDocument('#cookieConsent{'+dni+'}');
	else if (hostname.indexOf('netanttila.com')>-1)
		addCssToDocument('#cookie-warn{'+dni+'}');
	else if (hostname.indexOf('netapp.com')>-1)
		addCssToDocument('#cboxOverlay,#colorbox{'+dni+'}');
	else if (hostname.indexOf('nethouseprices.com')>-1)
		addCssToDocument('#cookieAccept{'+dni+'}');
	else if (hostname.indexOf('netpincer.hu')>-1)
		addCssToDocument('div[id="popup-webpage-cookie"]{'+dni+'}');
	else if (hostname.indexOf('netia.pl')>-1)
		addCssToDocument('#cookie_div{'+dni+'}');
	else if (hostname.indexOf('netonnet.se')>-1)
		addCssToDocument('.acceptCookies{'+dni+'}');
	else if (hostname.indexOf('networkrail.co.uk')>-1)
		addCssToDocument('.CookieNotification{'+dni+'}');
	else if (hostname.indexOf('newportadvertiser.com')>-1)
		addCssToDocument('div[style="position: relative; padding: 7px 50px 7px 0px; margin: 14px auto; border: 1px solid rgb(204, 204, 204); background-color: rgb(238, 238, 238);"]{'+dni+'}');
	else if (hostname.indexOf('newscientist.com')>-1)
		addCssToDocument('#rbiCookiePolicy_pushDownBoxWrapper{'+dni+'}');
	else if (hostname.indexOf('nexusmods.com')>-1)
		addCssToDocument('#jquery-cookie-law-script{'+dni+'}');
	else if (hostname.indexOf('nfbio.dk')>-1)
		addCssToDocument('#the-cookie{'+dni+'}');
	else if (hostname.indexOf('nicematin.com')>-1)
		addCssToDocument('.alert-cookies{'+dni+'}');
	else if (hostname.indexOf('nike.com')>-1)
		addCssToDocument('.modal-mask-class{'+dni+'}');
	else if (hostname.indexOf('nintendo.fi')>-1)
		addCssToDocument('#eucookies-note{'+dni+'}');
	else if (hostname.indexOf('nlyman.com')>-1)
		addCssToDocument('#toast-container{'+dni+'}');
	else if (hostname.indexOf('n-mobile.net')>-1)
		addCssToDocument('#infobox3{'+dni+'}');
	else if (hostname.indexOf('nol.hu')>-1)
		addCssToDocument('div[class="allow-cookie-stripe"]{'+dni+'}');
	else if (hostname.indexOf('northshropshirechronicle.com')>-1)
		addCssToDocument('div[style="position: relative; padding: 7px 50px 7px 0px; margin: 14px auto; border: 1px solid rgb(204, 204, 204); background-color: rgb(238, 238, 238);"]{'+dni+'}');
	else if (hostname.indexOf('nosalty.hu')>-1)
		addCssToDocument('#sliding-popup{'+dni+'}');
	else if (hostname.indexOf('nos.pt')>-1)
		addCssToDocument('.nav__cookies{'+dni+'}');
	else if (hostname.indexOf('nouvelobs.com')>-1)
		addCssToDocument("div[style*='width:550px;background-color:#feefaa;']{'+dni+'}");
	else if (hostname.indexOf('noz.de')>-1)
		addCssToDocument('#cookie-optout{'+dni+'}');
	else if (hostname.indexOf('nrc.nl')>-1)
		addCssToDocument('.cookiemonster,.cookiemonster.kleverig{'+dni+'}');
	else if (hostname.indexOf('nu.nl')>-1)
		addCssToDocument('#cookiebar_wrapper{'+dni+'}');
	else if (hostname.indexOf('nwolb.com')>-1)
		addCssToDocument('#ctl00_privacyCookies_LIPCNB_PrivacyandCookiesNoticePanel{'+dni+'}');
	else if (hostname.indexOf('nyhederne.tv2.dk')>-1)
		addCssToDocument('#tv2cookiebar{'+dni+'}');
	else if (hostname.indexOf('nyheter24.se')>-1)
		addCssToDocument('#acceptCookiesDiv{'+dni+'}');
	else if (hostname.indexOf('o2.pl')>-1)
		addCssToDocument('.cookie-info__transition{'+dni+'}');
	else if (hostname.indexOf('occasions.autoscout24.be')>-1)
		addCssToDocument('#cookieInfoLayer{'+dni+'}');
	else if (hostname.indexOf('odeon.co.uk')>-1)
		addCssToDocument('#icoCookiesBanner{'+dni+'}');
	else if (hostname.indexOf('office.com')>-1)
		addCssToDocument('#BannerContainer{'+dni+'}');
	else if (hostname.indexOf('olvg.nl')>-1)
		addCssToDocument('#cc{'+dni+'}');
	else if (hostname.indexOf('olx.pl')>-1) {
		if (URL.indexOf('olx.pl/i2')>-1)
			addCssToDocument('.cookiesBottomBar .button,.cookiesBottomBar > p,.cookiesBottomBar{'+dni+'}');
		else if (URL.indexOf('olx.pl/m')>-1)
			addCssToDocument('.bg-6{'+dni+'}');
	}
	else if (hostname.indexOf('onet.pl')>-1) {
		if (hostname.indexOf('m.onet.pl')>-1)
			addCssToDocument('.cookies_over{'+dni+'}');
		else
			addCssToDocument('.cookieInfo{'+dni+'}');
	}
	else if (hostname.indexOf('onlive.co.uk')>-1)
		addCssToDocument('.top_message{'+dni+'}');
	else if (hostname.indexOf('open.ac.uk')>-1)
		addCssToDocument('.interaction{'+dni+'}');
	else if (hostname.indexOf('openclassrooms.com')>-1)
		addCssToDocument('.disclaimer.disclaimer--info.js-cookie-disclaimer{'+dni+'}');
	else if (hostname.indexOf('orange.com')>-1)
		addCssToDocument('#pop-client{'+dni+'}');
	else if (hostname.indexOf('orange.co.uk')>-1)
		addCssToDocument('#cookieBannerD,.cookieStandard{'+dni+'}');
	else if (hostname.indexOf('orange.pl')>-1)
		addCssToDocument('#cookiesArticle{'+dni+'}');
	else if (hostname.indexOf('ordnancesurvey.co.uk')>-1)
		addCssToDocument('.message{'+dni+'}');
	else if (hostname.indexOf('originalpenguin.co.uk')>-1)
		addCssToDocument('#epd{'+dni+'}');
	else if (hostname.indexOf('origo.hu')>-1)
		addCssToDocument('div[class="accept-cookie-open"]{'+dni+'}');
	else if (hostname.indexOf('otomoto.pl')>-1)
		addCssToDocument('.om-cookie-agreement{'+dni+'}');
	else if (hostname.indexOf('orteil.dashnet.org')>-1)
		addCssToDocument('#cookies{'+dni+'}');
	else if (hostname.indexOf('ouest-france.fr')>-1)
		addCssToDocument('#disclaimerCookies{'+dni+'}');
	else if (hostname.indexOf('oup.com')>-1)
		addCssToDocument('div[id="oupcookiepolicy_message"]{'+dni+'}');
	else if (hostname.indexOf('out-law.com')>-1)
		addCssToDocument('#cookie{'+dni+'}');
	else if (hostname.indexOf('over-blog.com')>-1)
		addCssToDocument('.CookiesBar.js-cookies.CookiesBar--visible{'+dni+'}');
	else if (hostname.indexOf('oxfordjournals.org')>-1)
		addCssToDocument('.cookiepolicyimplied{'+dni+'}');
	else if (hostname.indexOf('packtpub.com')>-1)
		addCssToDocument('#cookie-outer-outer{'+dni+'}');
	else if (hostname.indexOf('parcelmotel.com')>-1)
		addCssToDocument('#cookiemonster{'+dni+'}');
	else if (hostname.indexOf('parisinfo.com')>-1)
		addCssToDocument('#cookieChoiceBanner{'+dni+'}');
	else if (hostname.indexOf('pathe.nl')>-1)
		addCssToDocument('#cookieOverlay{'+dni+'}');
	else if (hostname.indexOf('paypal.com')>-1)
		addCssToDocument('.row-fluid.cookie-notification{'+dni+'}');
	else if (hostname.indexOf('pccentre.pl')>-1)
		document.getElementsByTagName('body')[0].onload="ciasteczka(1);";
	else if (hostname.indexOf('pccomponentes.com')>-1)
		addCssToDocument('.capa_cookie.hide{'+dni+'}');
	else if (hostname.indexOf('pcpro.co.uk')>-1)
		addCssToDocument('#dennis-cookie-notice{'+dni+'}');
	else if (hostname.indexOf('pcformat.pl')>-1)
		addCssToDocument('.inplCCA{'+dni+'}');
	else if (hostname.indexOf('pclab.pl')>-1)
		addCssToDocument('.cookieInfo{'+dni+'}'); // for both m.* and www.*
	else if (hostname.indexOf('pekao.com.pl')>-1)
		addCssToDocument('#box-close,#box-div,#box-layer{'+dni+'}');
	else if (hostname.indexOf('penguingamers.eu')>-1)
		addCssToDocument('.RACKWrapper{'+dni+'}');
	else if (hostname.indexOf('penzcentrum.hu')>-1)
		addCssToDocument('div[id="_iph_cp_popup"]{'+dni+'}');
	else if (hostname.indexOf('perforce.com')>-1)
		addCssToDocument('span.optanon-link-text-left.optanon-white,ul.optanon-menu.optanon-menu-allow{'+dni+'}');
	else if (hostname.indexOf('picturehouses.co.uk')>-1)
		addCssToDocument('#cookie_message{'+dni+'}');
	else if (hostname.indexOf('pinkladyapples.co.uk')>-1)
		addCssToDocument('#banner-wrapper{'+dni+'}');
	else if (hostname.indexOf('pirateparty.org.uk')>-1)
		addCssToDocument('#confirmCookiePolicy{'+dni+'}');
	else if (hostname.indexOf('piret.be')>-1)
		addCssToDocument('.divCookiePopUpContainer{'+dni+'}');
	else if (hostname.indexOf('pizza-online.fi')>-1)
		addCssToDocument('#cookie_policy_container{'+dni+'}');
	else if (hostname.indexOf('play.google.com')>-1)
		addCssToDocument('.app-translation-bar{'+dni+'}');
	else if (hostname.indexOf('plesner.com')>-1)
		addCssToDocument('#wt-cookie-box{'+dni+'}');
	else if (hostname.indexOf('pokemon-trainer.com')>-1)
		addCssToDocument('#Notices{'+dni+'}');
	else if (hostname.indexOf('polisen.se')>-1)
		addCssToDocument('.cookie{'+dni+'}');
	else if (hostname.indexOf('politiken.dk')>-1)
		addCssToDocument('.cookie-warning-pop{'+dni+'}');
	else if (hostname.indexOf('polytuil.fr')>-1)
		addCssToDocument('#cookiesContainer{'+dni+'}');
	else if (hostname.indexOf('portfolio.hu')>-1)
		addCssToDocument('div[id="_iph_cp_popup"]{'+dni+'}');
	else if (hostname.indexOf('postimees.ee')>-1)
		addCssToDocument('#pm-cookie-consent{'+dni+'}');
	else if (hostname.indexOf('postnl.nl')>-1)
		addCssToDocument('#coverlay,#cwrapper{'+dni+'}');
	else if (hostname.indexOf('ppluk.com')>-1)
		addCssToDocument('#wsjpecrga{'+dni+'}');
	else if (hostname.indexOf('pprune.org')>-1)
		addCssToDocument('#ib-global-cookie-notice{'+dni+'}');
	else if (hostname.indexOf('pracuj.pl')>-1)
		addCssToDocument('#cookie{'+dni+'}');
	else if (hostname.indexOf('premierleague.com')>-1)
		addCssToDocument('#cookies-verify{'+dni+'}');
	else if (hostname.indexOf('priceminister.com')>-1)
		addCssToDocument('#legalNotificationEltId{'+dni+'}');
	else if (hostname.indexOf('priorygroup.com')>-1)
		addCssToDocument('#promptbar{'+dni+'}');
	else if (hostname.indexOf('prixtel.com')>-1)
		addCssToDocument('#dotbandeaucookie{'+dni+'}');
	else if (hostname.indexOf('proximus.be')>-1)
		addCssToDocument('section[data-tms-id="TMS_COOKIE_MESSAGE"]{'+dni+'}');
	else if (hostname.indexOf('questtv.co.uk')>-1)
		addCssToDocument('#dni-notifications{'+dni+'}');
	else if (hostname.indexOf('quoka.de')>-1)
		addCssToDocument('#msgCookie{'+dni+'}');
	else if (hostname.indexOf('qype.co.uk')>-1)
		addCssToDocument('.js-cookie-info{'+dni+'}');
	else if (hostname.indexOf('radionomy.com')>-1)
		addCssToDocument('#cookieDough{'+dni+'}');
	else if (hostname.indexOf('ransomesjacobsen.com')>-1)
		addCssToDocument('#cookieuseage{'+dni+'}');
	else if (hostname.indexOf('rapidonline.com')>-1)
		addCssToDocument('#Header_SelectSitePopup_DisplaySiteSplitMsgDiv{'+dni+'}');
	else if (hostname.indexOf('rbs.co.uk')>-1)
		addCssToDocument('.pod.classic.brd-none.dev-pod{'+dni+'}');
	else if (hostname.indexOf('realmadrid.com')>-1)
		addCssToDocument('.m_cookie{'+dni+'}');
	else if (hostname.indexOf('redbubble.com')>-1)
		addCssToDocument('#RB_React_Component_CookieBanner_1{'+dni+'}');
	else if (hostname.indexOf('redbull.com')>-1)
		addCssToDocument('.cookie-notification{'+dni+'}');
	else if (hostname.indexOf('redbull.co.uk')>-1)
		addCssToDocument('.EUCookiePolicyContainer{'+dni+'}');
	else if (hostname.indexOf('reddit.com')>-1)	{
		if (hostname.indexOf('m.reddit.com')>-1)
			addCssToDocument('.infobar{'+dni+'}');
		else
			addCssToDocument('#eu-cookie-policy{'+dni+'}');
	}
	else if (hostname.indexOf('reed.co.uk')>-1)
		addCssToDocument('.notification{'+dni+'}');
	else if (hostname.indexOf('reghardware.com')>-1)
		addCssToDocument('#RegCCO{'+dni+'}');
	else if (hostname.indexOf('rejsekort.dk')>-1)
		addCssToDocument('[class="CookieWarning"]{'+dni+'}');
	else if (hostname.indexOf('reliancebankltd.com')>-1)
		addCssToDocument('#informationbar{'+dni+'}');
	else if (hostname.indexOf('retnemt.dk')>-1)
		addCssToDocument('div[class="CookieInfoBox"]{'+dni+'}');
	else if (hostname.indexOf('rex.kb.dk')>-1)
		addCssToDocument('.content{'+dni+'}');
	else if (hostname.indexOf('rexfeatures.com')>-1 || hostname.indexOf('rexusa.com')>-1)
		addCssToDocument('#site-we-use-cookies{'+dni+'}');
	else if (hostname.indexOf('rfi.fr')>-1)
		addCssToDocument('.cookies_bar{'+dni+'}');
	else if (hostname.indexOf('richersounds.com')>-1)
		addCssToDocument('#headerCookieLaw{'+dni+'}');
	else if (hostname.indexOf('rightmove.co.uk')>-1)
		addCssToDocument('#cookiemodalbar{'+dni+'}');
	else if (hostname.indexOf('rireetchansons.fr')>-1)
		addCssToDocument('.popin-cgu-cookie-inner{'+dni+'}');
	else if (hostname.indexOf('road.cc')>-1)
		addCssToDocument('#sliding-popup{'+dni+'}');
	else if (hostname.indexOf('robe.es')>-1)
		addCssToDocument('#dvCookie.cookiesms{'+dni+'}');
	else if (hostname.indexOf('rockpapershotgun.com')>-1)
		addCssToDocument('#ecd_opt_in_banner{'+dni+'}');
	else if (hostname.indexOf('rollingstone.com')>-1)
		addCssToDocument('#euNotice{'+dni+'}');
	else if (hostname.indexOf('rotring.com')>-1)
		addCssToDocument('#cookienotify{'+dni+'}');
	else if (hostname.indexOf('royalmarsden.nhs.uk')>-1)
		addCssToDocument('#block-bean-cookie-message{'+dni+'}');
	else if (hostname.indexOf('royalnavy.mod.uk')>-1)
		addCssToDocument('#cookies-notice{'+dni+'}');
	else if (hostname.indexOf('rs-online.com')>-1)
		addCssToDocument('.cookieMessageDiv{'+dni+'}');
	else if (hostname.indexOf('rte.ie')>-1)
		addCssToDocument('#cookie-policy-strap{'+dni+'}');
	else if (hostname.indexOf('rtl.hu')>-1)
		addCssToDocument('.cookie-container,.cookie-container-most{'+dni+'}');
	else if (hostname.indexOf('rtve.es')>-1)
		addCssToDocument('#rtveCookiePolicy{'+dni+'}');
	else if (hostname.indexOf('rtvslo.si')>-1)
		addCssToDocument('#size-window-cookie{'+dni+'}');
	else if (hostname.indexOf('rugbyworldcup.com')>-1)
		addCssToDocument('.banner,#Explanation{'+dni+'}');
	else if (hostname.indexOf('rumid.dk')>-1)
		addCssToDocument('#banner-floating,div[style^="bottom: 0px; height: 1px; left: 0px;"]{'+dni+'}');
	else if (hostname.indexOf('ruter.no')>-1)
		addCssToDocument('div[data-cookie-message]{'+dni+'}');
	else if (hostname.indexOf('samsung.com')>-1)
		addCssToDocument('.cookie_notice, .cookiewarning, .cookie-warning{'+dni+'}');
	else if (hostname.indexOf('santanderbillpayment.co.uk')>-1)
		addCssToDocument('#euPrivacy_control_euPrivacy_cookiesMsg{'+dni+'}');
	else if (hostname.indexOf('santander.co.uk')>-1)
		addCssToDocument('#cookiebannerAH{'+dni+'}');
	else if (hostname.indexOf('satkurier.pl')>-1)
		addCssToDocument('.cc_banner-wrapper{'+dni+'}');
	else if (hostname.indexOf('satclub.pl')>-1)
		addCssToDocument('.skryptcookies-pl{'+dni+'}');
	else if (hostname.indexOf('savi-france.fr')>-1)
		addCssToDocument('#notifybar{'+dni+'}');
	else if (hostname.indexOf('sbab.se')>-1)
		addCssToDocument('#cookie{'+dni+'}');
	else if (hostname.indexOf('schwarzkopf.co.uk')>-1)
		addCssToDocument('div.cookiedisclaimer{'+dni+'}');
	else if (hostname.indexOf('schwarzkopf.de')>-1)
		addCssToDocument('div.cookiedisclaimer{'+dni+'}');
	else if (hostname.indexOf('sciaga.pl')>-1)
		addCssToDocument('.cookiespolicy{'+dni+'}');
	else if (hostname.indexOf('scottishfriendly.co.uk')>-1)
		addCssToDocument('#cookieNotification{'+dni+'}');
	else if (hostname.indexOf('seetickets.com')>-1)
		addCssToDocument('.cookieslaw{'+dni+'}');
	else if (hostname.indexOf('seloger.com')>-1)
		addCssToDocument('.container_cookies{'+dni+'}');
	else if (hostname.indexOf('severntrent.com')>-1)
		addCssToDocument('#cookiePrompt{'+dni+'}');
	else if (hostname.indexOf('sgs.com')>-1)
		addCssToDocument('.sgsCookies{'+dni+'}');
	else if (hostname.indexOf('shop.pattheduck.com')>-1)
		addCssToDocument('#FISLCC{'+dni+'}');
	else if (hostname.indexOf('shpock.com')>-1)
		addCssToDocument('#cookie-modal{'+dni+'}');
	else if (hostname.indexOf('shrewsburychronicle.com')>-1)
		addCssToDocument('div[style="position: relative; padding: 7px 50px 7px 0px; margin: 14px auto; border: 1px solid rgb(204, 204, 204); background-color: rgb(238, 238, 238);"]{'+dni+'}');
	else if (hostname.indexOf('shropshirestar.com')>-1)
		addCssToDocument('.inner{'+dni+'}');
	else if (hostname.indexOf('siepisze.pl')>-1)
		addCssToDocument('div[class^="pea_cook_wrapper"]{'+dni+'}');
	else if (hostname.indexOf('simple.hu')>-1)
		addCssToDocument('div[class^="box-cookie"]{'+dni+'}');
	else if (hostname.indexOf('simyo.es')>-1)
		addCssToDocument('.cookieAsker{'+dni+'}');
	else if (hostname.indexOf('skapiec.pl')>-1)
		addCssToDocument('#uclaInfo{'+dni+'}');
	else if (hostname.indexOf('skat.dk')>-1)
		addCssToDocument('.cookieMaster{'+dni+'}');
	else if (hostname.indexOf('skipton.co.uk')>-1)
		addCssToDocument('#AlertCookieBanner{'+dni+'}');
	else if (hostname.indexOf('sky.com')>-1)
		addCssToDocument('#skycom-cookie-wrapper{'+dni+'}');
	else if (hostname.indexOf('skynet.be')>-1)
		addCssToDocument('#messageCookie{'+dni+'}');
	else if (hostname.indexOf('skyscanner.net')>-1)
		addCssToDocument('#cookie{'+dni+'}');
	else if (hostname.indexOf('slate.fr')>-1)
		addCssToDocument('.footer_cnil{'+dni+'}');
	else if (hostname.indexOf('smartbox.dk')>-1)
		addCssToDocument('#cookiePopin{'+dni+'}');
	else if (hostname.indexOf('smile.co.uk')>-1)
		addCssToDocument('#noticePanel{'+dni+'}');
	else if (hostname.indexOf('soeren-hentzschel.at')>-1)
		addCssToDocument('#storage-notice{'+dni+'}');
	else if (hostname.indexOf('softonet.pl')>-1)
		addCssToDocument('.cookieInfo{'+dni+'}');
	else if (hostname.indexOf('sofort.com')>-1)
		addCssToDocument('.small{'+dni+'}');
	else if (hostname.indexOf('softpedia.com')>-1)
		addCssToDocument('.jobnotice_cnt{'+dni+'}');
	else if (hostname.indexOf('solus-project.com')>-1)
		addCssToDocument('#cookie-law-info-bar{'+dni+'}');
	else if (hostname.indexOf('sonera.fi')>-1)
		addCssToDocument('.attention-notice{'+dni+'}');
	else if (hostname.indexOf('soundcloud.com')>-1)
		addCssToDocument('.announcement{'+dni+'}');
	else if (hostname.indexOf('southshropshirejournals.com')>-1)
		addCssToDocument('div[style="position: relative; padding: 7px 50px 7px 0px; margin: 14px auto; border: 1px solid rgb(204, 204, 204); background-color: rgb(238, 238, 238);"]{'+dni+'}');
	else if (hostname.indexOf('sport.es')>-1)
		addCssToDocument('#msg-cookie{'+dni+'}');
	else if (hostname.indexOf('spotify.com')>-1)
		addCssToDocument('#js-message-bar-cookie-notice,#js-message-notice[data-name="cookieNotice"],.uk-cookies,.notification-bar uk-cookies{'+dni+'}');
	else if (hostname.indexOf('stadt-koeln.de')>-1)
		addCssToDocument('#cookie_content{'+dni+'}');
	else if (hostname.indexOf('stargreen.com')>-1)
		addCssToDocument('div[style^="color: rgb(238, 238, 238); background-color: rgb(102, 102, 51);"]{'+dni+'}');
	else if (hostname.indexOf('startnext.com')>-1)
		addCssToDocument('#head-bar-cookie-info{'+dni+'}');
	else if (hostname.indexOf('stofa.dk')>-1)
		addCssToDocument('#cookie_collapse,.cookie_footer,#cookie_popup{'+dni+'}');
	else if (hostname.indexOf('store.playstation.com')>-1)
		addCssToDocument('#cookieWarningMessage{'+dni+'}');
	else if (hostname.indexOf('stormcreative.co.uk')>-1)
		addCssToDocument('#storm-cookie{'+dni+'}');
	else if (hostname.indexOf('studentski.net')>-1)
		addCssToDocument('#cookies{'+dni+'}');
	else if (hostname.indexOf('sundaypost.com')>-1)
		addCssToDocument('.notification.notification-error{'+dni+'}');
	else if (hostname.indexOf('superdeporte.es')>-1)
		addCssToDocument("div[style*='bg_cookies.jpg']{'+dni+'}");
	else if (hostname.indexOf('svt.se')>-1 || hostname.indexOf('svtflow.se')>-1)
		addCssToDocument('#svtCookieInformationContainer{'+dni+'}');
	else if (hostname.indexOf('suzuki.co.uk')>-1)
		addCssToDocument('#privacypopup{'+dni+'}');
	else if (hostname.indexOf('tandfonline.com')>-1)
		addCssToDocument('.b-body,.b-header{'+dni+'}');
	else if (hostname.indexOf('tbicardiffairport.com')>-1)
		addCssToDocument('#cookielightbox{'+dni+'}');
	else if (hostname.indexOf('tddirectinvesting.co.uk')>-1)
		addCssToDocument('#cookieWindowContainer{'+dni+'}');
	else if (hostname.indexOf('techrepublic.com')>-1)
		addCssToDocument('#cookieCont{'+dni+'}');
	else if (hostname.indexOf('telecomitalia.it')>-1)
		addCssToDocument('#gld_cookie_flag{'+dni+'}');
	else if (hostname.indexOf('telekom.hu')>-1)
		addCssToDocument('#app-cookie-policy{'+dni+'}');
	else if (hostname.indexOf('telenet.be')>-1)
		addCssToDocument('.cookie-regulation{'+dni+'}');
	else if (hostname.indexOf('m.telepolis.pl')>-1)
		addCssToDocument('.cookies_over{'+dni+'}');
	else if (hostname.indexOf('telfordjournal.com')>-1)
		addCssToDocument('div[style="position: relative; padding: 7px 50px 7px 0px; margin: 14px auto; border: 1px solid rgb(204, 204, 204); background-color: rgb(238, 238, 238);"]{'+dni+'}');
	else if (hostname.indexOf('telmore.dk')>-1)
		addCssToDocument('#CookieDiv{'+dni+'}');
	else if (hostname.indexOf('terra.es')>-1)
		addCssToDocument('#zaz-nb-plugin-cookie-message{'+dni+'}');
	else if (hostname.indexOf('tesco.com')>-1)
		addCssToDocument('#cp,#tesco_cookie_widget{'+dni+'}');
	else if (hostname.indexOf('tfa.net')>-1)
		addCssToDocument('cccwr{'+dni+'}');
	else if (hostname.indexOf('theatlantic.com')>-1)
		addCssToDocument('.cookie-disclaimer{'+dni+'}');
	else if (hostname.indexOf('thecheshire.co.uk')>-1)
		addCssToDocument('#cn{'+dni+'}');
	else if (hostname.indexOf('thecourier.co.uk')>-1)
		addCssToDocument('.notification{'+dni+'}');
	else if (hostname.indexOf('thederbyshire.co.uk')>-1)
		addCssToDocument('#cn{'+dni+'}');
	else if (hostname.indexOf('theguardian.com')>-1)
		addCssToDocument('.identity-noticebar,.site-message.site-message--cookies{'+dni+'}');
	else if (hostname.indexOf('theherbert.org')>-1)
		addCssToDocument('#ico_banner{'+dni+'}');
	else if (hostname.indexOf('theiet.org')>-1)
		addCssToDocument('#ietCookiePanel{'+dni+'}');
	else if (hostname.indexOf('thejournal.ie')>-1)
		addCssToDocument('#notify-container{'+dni+'}');
	else if (hostname.indexOf('themeflood.com')>-1)
		addCssToDocument('#gatewayBarFillstacks_in_5416_page4{'+dni+'}');
	else if (hostname.indexOf('thenottingham.com')>-1)
		addCssToDocument('#cookieMsg{'+dni+'}');
	else if (hostname.indexOf('theprogressive.com')>-1)
		addCssToDocument('#wrap-message{'+dni+'}');
	else if (hostname.indexOf('theregister.co.uk')>-1)
		addCssToDocument('#RegCCO{'+dni+'}');
	else if (hostname.indexOf('theson.org.uk')>-1)
		addCssToDocument('#msg_top_bar{'+dni+'}');
	else if (hostname.indexOf('thesun.co.uk')>-1)
		addCssToDocument('#sun-cookieMessage{'+dni+'}');
	else if (hostname.indexOf('thesundaytimes.co.uk')>-1)
		addCssToDocument('#tto-cookieMessage{'+dni+'}');
	else if (hostname.indexOf('thevitalounge.net')>-1)
		addCssToDocument('#scnb-cookie-bar{'+dni+'}');
	else if (hostname.indexOf('thewolseley.com')>-1)
		addCssToDocument('#cookie_policy_banner{'+dni+'}');
	else if (hostname.indexOf('thisengland.co.uk')>-1)
		addCssToDocument('#msg_top_bar{'+dni+'}');
	else if (hostname.indexOf('thisislocallondon.co.uk')>-1)
		addCssToDocument('#cookiewarningiframe{'+dni+'}');
	else if (hostname.indexOf('three.co.uk')>-1)
		addCssToDocument('#rwd-cookie-message{'+dni+'}');
	else if (hostname.indexOf('ticketmaster.co.uk')>-1)
		addCssToDocument('#_evh-ric{'+dni+'}');
	else if (hostname.indexOf('tidningenjulia.se')>-1)
		addCssToDocument('.alert.alert-info.page-alert{'+dni+'}');
	else if (hostname.indexOf('timefy.com')>-1)
		addCssToDocument('#nq_cnilbanner{'+dni+'}');
	else if (hostname.indexOf('tiscali.it')>-1)
		addCssToDocument('.bannerInformativaEU{'+dni+'}');
	else if (hostname.indexOf('t-mobile.co.uk')>-1)
		addCssToDocument('#cookiesMessage,.cookies-message-container{'+dni+'}');
	else if (hostname.indexOf('t-mobile.nl')>-1)
		addCssToDocument('#exposeMask,#TMobile_nl_WebPortals_UI_PageComponents_CookieSettingsOverlay_CookieSettingsOverlayController_OverlayRootDiv{'+dni+'}');
	else if (hostname.indexOf('t-mobile.pl')>-1)
		addCssToDocument('#cookieInfoWrapper{'+dni+'}');
	else if (hostname.indexOf('toluna.com')>-1)
		addCssToDocument('#cookiesWarningBanner{'+dni+'}');
	else if (hostname.indexOf('tomshw.it')>-1)
		addCssToDocument('#cookies-privacy{'+dni+'}');
	else if (hostname.indexOf('totalcar.hu')>-1)
		addCssToDocument('div[id="_iph_cp_popup"]{'+dni+'}');
	else if (hostname.indexOf('totalmoney.pl')>-1)
		addCssToDocument('#right_widget{'+dni+'}');
	else if (hostname.indexOf('travelsupermarket.com')>-1)
		addCssToDocument('#cookieDirective{'+dni+'}');
	else if (hostname.indexOf('trophies-ps3.de')>-1)
		addCssToDocument('#ingameCookie{'+dni+'}');
	else if (hostname.indexOf('tusfiles.net')>-1)
		addCssToDocument('#cookiescript_injected{'+dni+'}');
	else if (hostname.indexOf('tvcatchup.com')>-1)
		addCssToDocument('#messageBox{'+dni+'}');
	else if (hostname.indexOf('tvlicensing.co.uk')>-1)
		addCssToDocument('#blq-global{'+dni+'}');
	else if (hostname.indexOf('tvn24bis.pl')>-1)
		addCssToDocument('#msgLayer{'+dni+'}');
	else if (hostname.indexOf('tvn24.pl')>-1)
		addCssToDocument('#msgLayer{'+dni+'}');
	else if (hostname.indexOf('tvn.pl')>-1)
		addCssToDocument('#msgLayer{'+dni+'}');
	else if (hostname.indexOf('tv.wp.pl')>-1)
		addCssToDocument('#cookiesPolicy{'+dni+'}');
	else if (hostname.indexOf('tweakers.net')>-1)
		addCssToDocument('.notificationsContainer{'+dni+'}');
	else if (hostname.indexOf('twitch.tv')>-1)
		addCssToDocument('.noty_bar{'+dni+'}');
	else if (hostname.indexOf('tyda.se')>-1)
		addCssToDocument('#accept-cookies-div{'+dni+'}');
	else if (hostname.indexOf('uk.eurosport.yahoo.com')>-1)
		addCssToDocument('#yucs-eprivacy{'+dni+'}');
	else if (hostname.indexOf('uk.farnell.com')>-1)
		addCssToDocument('#mktg_Cookie_Wrap{'+dni+'}');
	else if (hostname.indexOf('ukpostbox.com')>-1)
		addCssToDocument('#eu_cookies{'+dni+'}');
	else if (hostname.indexOf('uktv.co.uk')>-1)
		addCssToDocument('span.cookie-notice,.cookie-notice{'+dni+'}');
	else if (hostname.indexOf('uk.yahoo.com')>-1)
		addCssToDocument('#applet_p_50000174,#y-shade{'+dni+'}');
	else if (hostname.indexOf('unblog.fr')>-1)
		addCssToDocument('#unblcn{'+dni+'}');
	else if (hostname.indexOf('ungdomskort.dk')>-1)
		addCssToDocument('#eksCookiePrompt{'+dni+'}');
	else if (hostname.indexOf('unity3d.com')>-1)
		addCssToDocument('.cookie-dialog{'+dni+'}');
	else if (hostname.indexOf('uptodown.com')>-1)
		addCssToDocument('.cookies{'+dni+'}');
	else if (hostname.indexOf('usersnap.com')>-1)
		addCssToDocument('.cookies-message{'+dni+'}');
	else if (hostname.indexOf('usine-digitale.fr')>-1)
		addCssToDocument('#jQAlertAcceptCookie{'+dni+'}');
	else if (hostname.indexOf('uzletresz.hu')>-1)
		addCssToDocument('div[class="accept-cookie-open"]{'+dni+'}');
	else if (hostname.indexOf('vanguard.co.uk')>-1)
		addCssToDocument('#cookieDrawer{'+dni+'}');
	else if (hostname.indexOf('veuve-clicquot.com')>-1)
		addCssToDocument('.agegate-cookie{'+dni+'}');
	else if (hostname.indexOf('vg.hu')>-1)
		addCssToDocument('div[class="allow-cookie-stripe"]{'+dni+'}');
	else if (hostname.indexOf('vice.com')>-1)
		addCssToDocument('#cookies_msg{'+dni+'}');
	else if (hostname.indexOf('videnskab.dk')>-1)
		addCssToDocument('#block-videnskabdk_custom_blocks-cookie_compliance{'+dni+'}');
	else if (hostname.indexOf('videojug.com')>-1)
		addCssToDocument('.cp-alert-message{'+dni+'}');
	else if (hostname.indexOf('vileda.com')>-1)
		addCssToDocument('#cookienotice-container{'+dni+'}');
	else if (hostname.indexOf('volvotrucks.com')>-1)
		addCssToDocument('#acceptCookie{'+dni+'}');
	else if (hostname.indexOf('vouchercodes.co.uk')>-1)
		addCssToDocument('#cookie-popup{'+dni+'}');
	else if (hostname.indexOf('vpspecialists.co.uk')>-1)
		addCssToDocument('#CookieConsentDiv{'+dni+'}');
	else if (hostname.indexOf('waitrose.com')>-1)
		addCssToDocument('#topEuCookieAlert{'+dni+'}');
	else if (hostname.indexOf('wattsindustries.com')>-1)
		addCssToDocument('#header1_overlay2{'+dni+'}');
	else if (hostname.indexOf('wavesfm.com')>-1)
		addCssToDocument('#footer_width{'+dni+'}');
	else if (hostname.indexOf('web.skype.com')>-1)
		addCssToDocument('.notification.info{'+dni+'}');
	else if (hostname.indexOf('weebs.dk')>-1)
		addCssToDocument('#cookie_wrapper{'+dni+'}');
	else if (hostname.indexOf('which.co.uk')>-1)
		addCssToDocument('#eprivacy-holder,#eprivacy-outer{'+dni+'}');
	else if (hostname.indexOf('wikia.com')>-1)
		addCssToDocument('.banner-notification.notify{'+dni+'}');
	else if (hostname.indexOf('wikomobile.com')>-1)
		addCssToDocument('.pop_cookies{'+dni+'}');
	else if (hostname.indexOf('wimbledon.com')>-1)
		addCssToDocument('#wimPrivacyBanner{'+dni+'}');
	else if (hostname.indexOf('wimp.dk')>-1)
		addCssToDocument('.cookie-warn{'+dni+'}');
	else if (hostname.indexOf('wirtualnemedia.pl')>-1)
		addCssToDocument('#cookiebar{'+dni+'}');
	else if (hostname.indexOf('wizzo.es')>-1)
		addCssToDocument('.avisoCookie{'+dni+'}');
	else if (hostname.indexOf('wp.pl')>-1)
		addCssToDocument('#WP-cookie-info{'+dni+'}');
	else if (hostname.indexOf('wrzucacz.pl')>-1)
		addCssToDocument('P[class="info"]{'+dni+'}');
	else if (hostname.indexOf('wtatennis.com')>-1)
		addCssToDocument('#prfrm_cookie_bnr{'+dni+'}');
	else if (hostname.indexOf('www.airbusgroup.com')>-1)
		addCssToDocument('.cookiebox{'+dni+'}');
	else if (hostname.indexOf('www.allgemeine-zeitung.de')>-1)
		addCssToDocument('.cookie-notification{'+dni+'}');
	else if (hostname.indexOf('www.alpenverein.it')>-1)
		addCssToDocument('#CookieT2Bar{'+dni+'}');
	else if (hostname.indexOf('wwwapps.ups.com')>-1)
		addCssToDocument('#cookieMsg{'+dni+'}');
	else if (hostname.indexOf('www.athenagames.co.uk')>-1)
		addCssToDocument('#cookieNotice{'+dni+'}');
	else if (hostname.indexOf('www.bartsmit.com')>-1)
		addCssToDocument('#cookienotification,#cookienotification_background{'+dni+'}');
	else if (hostname.indexOf('www.bbc.com')>-1)
		addCssToDocument('#bbccookies{'+dni+'}');
	else if (hostname.indexOf('www.bbvaopenmind.com')>-1)
		addCssToDocument('#cg_cookie_bar{'+dni+'}');
	else if (hostname.indexOf('www.bing.com')>-1)
		addCssToDocument('#thp_notf_div{'+dni+'}');
	else if (hostname.indexOf('www.blacknight.com')>-1)
		addCssToDocument('#bkCookieBanner{'+dni+'}');
	else if (hostname.indexOf('www.blockbuster.co.uk')>-1)
		addCssToDocument('.toast-type-newCookie{'+dni+'}');
	else if (hostname.indexOf('www.caterersearch.com')>-1)
		addCssToDocument('#rbiCookiePolicy_mainInformation{'+dni+'}');
	else if (hostname.indexOf('www.cda.pl')>-1)
		addCssToDocument('#box_info.bx-info{'+dni+'}');
	else if (hostname.indexOf('www.chefkoch.de')>-1)
		addCssToDocument('#ck-cookie-statement{'+dni+'}');
	else if (hostname.indexOf('www.chronodrive.com')>-1)
		addCssToDocument('#privacyBar{'+dni+'}');
	else if (hostname.indexOf('www.colissimo.fr')>-1)
		addCssToDocument('#cookies{'+dni+'}');
	else if (hostname.indexOf('www.collishop.be')>-1)
		addCssToDocument('#cookienotif{'+dni+'}');
	else if (hostname.indexOf('www.crucial.com')>-1)
		addCssToDocument('.cookieInfo{'+dni+'}');
	else if (hostname.indexOf('www.dagospia.com')>-1)
		addCssToDocument('#banner_privacy{'+dni+'}');
	else if (hostname.indexOf('www.disneystore.co.uk')>-1)
		addCssToDocument('.dismissable-cookie-policy{'+dni+'}');
	else if (hostname.indexOf('www.dolomitisuperski.com')>-1)
		addCssToDocument('#pc-cookie-notice{'+dni+'}');
	else if (hostname.indexOf('www.drinkaware.co.uk')>-1)
		addCssToDocument('.cookie-check{'+dni+'}');
	else if (hostname.indexOf('www.dropbox.com')>-1)
		addCssToDocument('#top-notification-bar-container{'+dni+'}');
	else if (hostname.indexOf('www.ebuyer.com')>-1)
		addCssToDocument('.cookie-monster.js-cookie-monster.cookie-monster-show{'+dni+'}');
	else if (hostname.indexOf('www.edexcel.com')>-1)
		addCssToDocument('#cookiemsgbox{'+dni+'}');
	else if (hostname.indexOf('www.elektroda.pl')>-1)
		addCssToDocument('.cookie-info{'+dni+'}');
	else if (hostname.indexOf('www.esa.int')>-1)
		addCssToDocument('#cookie_loc{'+dni+'}');
	else if (hostname.indexOf('www.espn.co.uk')>-1)
		addCssToDocument('.cookie-overlay{'+dni+'}');
	else if (hostname.indexOf('www.fidelity.co.uk')>-1)
		addCssToDocument('#cookieMgn{'+dni+'}');
	else if (hostname.indexOf('www.filmweb.pl')>-1)
		addCssToDocument('.topBarCont{'+dni+'}');
	else if (hostname.indexOf('www.futura-sciences.com')>-1)
		addCssToDocument('#fs-cookiewarning{'+dni+'}');
	else if (hostname.indexOf('www.gocompare.com')>-1)
		addCssToDocument('.globalcookiepolicycontainer{'+dni+'}');
	else if (hostname.indexOf('www.guardian.co.uk')>-1)
		addCssToDocument('.identity-noticebar{'+dni+'}');
	else if (hostname.indexOf('www.hrvatskitelekom.hr')>-1)
		addCssToDocument('.cookies-notification{'+dni+'}');
	else if (hostname.indexOf('www.icabanken.se')>-1)
		addCssToDocument('#cookieAgreementContent{'+dni+'}');
	else if (hostname.indexOf('www.ico.gov.uk')>-1)
		addCssToDocument('#banner{'+dni+'}');
	else if (hostname.indexOf('www.joomla.pl')>-1)
		addCssToDocument('#panel_cookie_dol{'+dni+'}');
	else if (hostname.indexOf('www.just-eat.be')>-1)
		addCssToDocument('.is-active.infoBar--hideByDefault.infoBar--dark.infoBar{'+dni+'}');
	else if (hostname.indexOf('www.kia.com')>-1)
		addCssToDocument('#cookiedialog{'+dni+'}');
	else if (hostname.indexOf('www.lagazettedescommunes.com')>-1)
		addCssToDocument('#bandeauCookies{'+dni+'}');
	else if (hostname.indexOf('www.ldlc-pro.com')>-1)
		addCssToDocument('#privacy div#container{'+dni+'}');
	else if (hostname.indexOf('www.lg.com')>-1)
		addCssToDocument('.eprivacy-cookie{'+dni+'}');
	else if (hostname.indexOf('www.livescore.com')>-1)
		addCssToDocument('div[data-id=infobar]{'+dni+'}');
	else if (hostname.indexOf('www.mediaworld.it')>-1)
		addCssToDocument('#bannerPolicy{'+dni+'}');
	else if (hostname.indexOf('www.misco.co.uk')>-1)
		addCssToDocument('.CookieDirectiveHeight{'+dni+'}');
	else if (hostname.indexOf('www.mgsm.pl')>-1)
		addCssToDocument('.cookieBar{'+dni+'}');
	else if (hostname.indexOf('www.netflix.com')>-1)
		addCssToDocument('#cookie-disclosure{'+dni+'}');
	else if (hostname.indexOf('www.netia.pl')>-1)
		addCssToDocument('#cookie_div{'+dni+'}');
	else if (hostname.indexOf('www.ofqual.gov.uk')>-1)
		addCssToDocument('#cookiemsg{'+dni+'}');
	else if (hostname.indexOf('www.orange.co.uk')>-1)
		addCssToDocument('.cookieStandard{'+dni+'}');
	else if (hostname.indexOf('www.palaisdesthes.com')>-1)
		addCssToDocument('#header_alert_cookie{'+dni+'}');
	else if (hostname.indexOf('www.pb.pl')>-1)
		addCssToDocument('#cookies-agreement-box{'+dni+'}');
	else if (hostname.indexOf('www.phonearena.com')>-1)
		addCssToDocument('#cookies{'+dni+'}');
	else if (hostname.indexOf('www.poslovni.hr')>-1)
		addCssToDocument('#cookie_container{'+dni+'}');
	else if (hostname.indexOf('www.postoffice.co.uk')>-1)
		addCssToDocument('#cookiereports-badge{'+dni+'}');
	else if (hostname.indexOf('www.profil.at')>-1)
		addCssToDocument('#cookieModal{'+dni+'}');
	else if (hostname.indexOf('www.quechoisir.org')>-1)
		addCssToDocument('#bannerCnil{'+dni+'}');
	else if (hostname.indexOf('www.rail-reg.gov.uk')>-1)
		addCssToDocument('#CookieQBanner{'+dni+'}');
	else if (hostname.indexOf('www.salesforce.com')>-1)
		addCssToDocument('#privacy-bar-bottom-container{'+dni+'}');
	else if (hostname.indexOf('www.santander.co.uk')>-1)
		addCssToDocument('#_W034_Cookie_Directive_WAR_W034_Cookie_Directiveportlet_contenedor01{'+dni+'}');
	else if (hostname.indexOf('www.sentres.com')>-1)
		addCssToDocument('.cookies-eu{'+dni+'}');
	else if (hostname.indexOf('www.share.com')>-1)
		addCssToDocument('#ui-cookie-policy{'+dni+'}');
	else if (hostname.indexOf('www.sme.sk')>-1)
		addCssToDocument('.js-cookie-bar{'+dni+'}');
	else if (hostname.indexOf('www.sosh.fr')>-1)
		addCssToDocument('#s-cookie{'+dni+'}');
	else if (hostname.indexOf('www.sweclockers.com')>-1)
		addCssToDocument('#adblockBanner{'+dni+'}');
	else if (hostname.indexOf('www.taylorwessing.com')>-1)
		addCssToDocument('#twCookieConsent{'+dni+'}');
	else if (hostname.indexOf('www.tddirectinvesting.co.uk')>-1)
		addCssToDocument('#cookieWindowContainer{'+dni+'}');
	else if (hostname.indexOf('www.telepolis.pl')>-1)
		addCssToDocument('#div-cookie-komunikat{'+dni+'}');
	else if (hostname.indexOf('www.tfa.net')>-1)
		addCssToDocument('cccwr{'+dni+'}');
	else if (hostname.indexOf('www.theepinal.co.uk')>-1)
		addCssToDocument('.pea_cook_wrapper{'+dni+'}');
	else if (hostname.indexOf('www.theviewfromtheshard.com')>-1)
		addCssToDocument('#cookie_alert{'+dni+'}');
	else if (hostname.indexOf('www.thisislocallondon.co.uk')>-1)
		addCssToDocument('#cookiewarningiframe{'+dni+'}');
	else if (hostname.indexOf('www.three.ie')>-1)
		addCssToDocument('.cookie-pop-up-container{'+dni+'}');
	else if (hostname.indexOf('www.t-mobile.co.uk')>-1)
		addCssToDocument('#cookiesMessage{'+dni+'}');
	else if (hostname.indexOf('www.travelsupermarket.com')>-1)
		addCssToDocument('#cookieDirective{'+dni+'}');
	else if (hostname.indexOf('www.umu.se')>-1)
		addCssToDocument('.umuCookieMain{'+dni+'}');
	else if (hostname.indexOf('www.vanguard.co.uk')>-1)
		addCssToDocument('#cookieDrawer{'+dni+'}');
	else if (hostname.indexOf('www.virgintrains.co.uk')>-1)
		addCssToDocument('#cookies-fancybox{'+dni+'}');
	else if (hostname.indexOf('www.waitrose.com')>-1)
		addCssToDocument('#topEuCookieAlert{'+dni+'}');
	else if (hostname.indexOf('www.wasmachinestore.nl')>-1)
		addCssToDocument('.cookie-notification{'+dni+'}');
	else if (hostname.indexOf('www.your-move.co.uk')>-1)
		addCssToDocument('#Footer_cookieLawBox{'+dni+'}');
	else if (hostname.indexOf('wykop.pl')>-1)
		addCssToDocument('div[class="annotation type-alert type-permanent lspace m-reset-position closableContainer cookie"]{'+dni+'}');
	else if (hostname.indexOf('xe.com')>-1)
		addCssToDocument('.cookie-siteusage-notice{'+dni+'}');
	else if (hostname.indexOf('xxl.no')>-1)
		addCssToDocument('#alertCookie{'+dni+'}');
	else if (hostname.indexOf('yachtpaint.com')>-1)
		addCssToDocument('.cookiesPro{'+dni+'}');
	else if (hostname.indexOf('yahoo.com')>-1)
		addCssToDocument('#yucs-eprivacy{'+dni+'}');
	else if (hostname.indexOf('yell.com')>-1)
		addCssToDocument('.cookie-notification,#cookie-overlay{'+dni+'}');
	else if (hostname.indexOf('youtube.com')>-1)
		addCssToDocument('#google-cookie-alert{'+dni+'}');
	else if (hostname.indexOf('ywt.org.uk')>-1)
		addCssToDocument('#sliding-popup{'+dni+'}');
	else if (hostname.indexOf('zonaforo.meristation.com')>-1)
		addCssToDocument('.inner{'+dni+'}');
	else if (hostname.indexOf('zumba.com')>-1)
		addCssToDocument('.privacy-policy{'+dni+'}');
	else if (hostname.indexOf('zumi.pl')>-1)
		addCssToDocument('#cookieView{'+dni+'}');

	/* Groups of the websites */
	else if (hostname.indexOf('1and1.')>-1)
		addCssToDocument('#cookieinfo-container{'+dni+'}');
/*	else if (hostname.indexOf('.blogspot.')>-1) // TODO
		addCssToDocument('.cookie-choices-info{'+dni+'}');*/
	else if (hostname.indexOf('www.google.')>-1)
		addCssToDocument('#pushdown{'+dni+'}');

	/* If any other website, then try out that CSS */
	else
		addCssToDocument('#aboutCookieUsageBox, .accept_cookie, .accept-cookie, #accept_cookie, #accept-cookie, accept_cookie, accept-cookie, #acceptCookie, .accept_cookies, .accept-cookies, #accept_cookies, #accept-cookies, accept_cookies, accept-cookies, .acceptCookiesBox, #accept-cookies-div, #AdBlockerInfo, .agegate-cookie, #alert, .alertcookie, #alert-cookie, .alertCookie, #alert-cookie-policy, #alertCookies, .alert-info.alert-dismissable.alert, #allow_cookies_container, .annoying.notice, #askcook, #asterix_cookie_widget, #avcns-wrapper, #avcn_wrapperOuter, #AvisoCookieslaw, #avviso_cookie, #banner_cookie, #banner-cookie, .bannerInformativaEU, #bauerCookiePolicy, #bbccookies, #bcmsCookieInfoWrapper, #block-cookie_policy-0, #blogger_cookie_notice, .bmj-cookie-noticebar-content, .bottom_message, .box-cookies, #box_cookies_error, .box-info-cookie, #boxZgodaNaCookie, #ca_banner, #cadre_alert_cookies, .capaAvisoCookies, #capaAvisoPoliticaCookies_superior_mensajes, .capa_cookies, #cartelcookielegal, #catapult-cookie-bar, #cb_content, .cc_banner-wrapper, .cc_container, #cc-cookie-law, .cc-cookies, #cc-cookies, .cc-cookies-wrapper, #cccwr, #ccfd-eucookielaw, #ccm-banner-wrap, .ccmcss_oic, #cc-notification, #cc-notification-wrapper, .ccwrap, .ce-banner, .center_cookies, #ciasteczka, #ckWarning, .cl_dark.cl_bottom.cl_bar, #confirmCookiePolicy, #confirm_cookie_use, .con-large.cpr-bar, #conteneurCookies, .contenidoAvisoPoliticaCookies, #coockiechoice, .cookie, #cookie, cookie, #cookie3arhMsg, .cookie_accept, #cookie_accept, #cookie-accept, .cookieAccept, #cookie-acceptation-popup, .cookieAccepterSlider, .cookie-accept-overlay, #cookieAcceptPos, #cookieAcknowledgement, #cookieAdv, .cookieAdvice, #cookieAgree, .cookie-alert, #cookie_alert, #cookie-alert, #cookiealert, #cookieAlert, #CookieAlert, #cookie_alert_container, .cookieAsker, #cookie_assistant_container, .cookie-banner, .cookiebanner, #cookie_banner, #cookie-banner, #cookiebanner, .cookieBanner, #cookieBanner, .CookieBanner, #COOKIE_BANNER, #cookie_banner_container, .cookieBannerContainer, .cookie_bar, .cookie-bar, .cookiebar, #cookie_bar, #cookie-bar, #cookiebar, cookie-bar, .cookieBar, #cookieBar, #cookiebar-container, #cookie-bar-main, #cookie_bar_top, .cookie-block, #cookie-block, #cookiebnr, .cookie-box, #cookie_box, #cookie-box, .cookieBox, #cookieBox, #CookieBox, #cookieChoiceInfo, .cookie-compliance, #cookie-compliance, #cookie-compliance-bottom, #cookie-compliance-bottom-overlay, #cookieComplianceMessage, .cookie-consent, .cookieconsent, #cookie_consent, #cookie-consent, #cookieconsent, .cookieConsent, #cookieConsent, .COOKIECONSENT_BANDEAU, #cookie-consent-banner, #cookie-consent-bar, #cookieConsentBar, #cookie-consent-container, #CookieConsentDiv, .cookieconsent-popup, #cookieConsentWrapper, #cookie-container, #cookieContainer, .cookie_content, .cookie-content, #cookie-content, #cookie-control, .cookieControl, #cookieControl, #cookiecontrol_notice, #cookieCookieBar, #cookieDialog, .CookieDirectiveDisplay, .CookieDirectiveHeight, .cookie-disclaimer, #cookie_disclaimer, #cookie-disclaimer, .cookieDisclaimer, #cookieDisclaimer, #cookie-disclosure, #cookie-div, #cookiediv, #cookiefascia, #CookieFrame, #cookie_gld_cookie_flag, #cookieGuardMsg, .cookie-header, #cookie_header, #cookie-icon, #cookieInfCont, .cookie_info, .cookie-info, #cookie_info, #cookie-info, #cookieinfo, #cookieInfo, .CookieInfo, #CookieInfo, #cookie-info-bar, #cookieInfoBar, #cookieinfobox, #cookieInfoBox, #cookieInfoDiv, .cookie-info-layer, #cookieInfoMsgWrapper, #cookie-information, #CookieInformation, #cookie-information-banner, .cookie-information-container, .cookie-information-wrapper, #cookie_informer, #cookieInformerBooklet, #cookieInfoWrapper, .cookie-law, .cookielaw, #cookie_law, #cookie-law, #cookielaw, .cookieLaw, #cookieLaw, #cookielaw2, #cookie_law_banner, #CookielawBanner, #cookie-law-bar, .cookie-law.col-md-12, #cookie-law-compliance, #cookie-law-consent-section, #cookie-law-container, #cookieLawHeader, #cookie-law-info-bar, #cookie_law_notice_container, .cookie-law-overlay, .CookieLawPnl, #cookie-law-wrapper, #cookie_layer, #cookieLayer, #cookielightbox, .cookiem, .cookie-message, .cookiemessage, #cookie_message, #cookie-message, #cookieMessage, #cookieMessageBox, #cookie_message_container, #cookie-message-container, #cookieMessageContainer, .cookieMessageDiv, #cookieMessageWrapper, #cookieMgn, #cookie_modal, #cookieModal, #cookiemodalbar, #cookiemodalbarplaceholder, #cookie-modal-bg, #cookiemodule, .cookie-monster, #cookiemonster_popup, #cookieMonsterWrapper, #cookie_msg, #cookie-msg, #cookiemsg, #cookieMsg, #cookieMsgBlock, .cookie-note, .CookieNote, .cookie_notice, .cookie-notice, #cookie_notice, #cookie-notice, .cookieNotice, #cookieNotice, .cookienotice-bar, .cookienotice-container, #cookienotice-container, #cookieNoticeContainer, #cookienotif, .cookie_notification, .cookie-notification, #cookie-notification, .cookieNotification, #cookieNotification, .CookieNotification, #cookie-notification-banner, #CookieNotificationBar, .CookieNotificationTopBar, #cookie-notification-wrapper, #cookie-notifier, .cookie-notifier-text, .cookie-opt-in, .cookieOptIn, #cookie-opt-in-footer, #cookie_overlay, #cookie-overlay, #cookieoverlay, #cookieOverlay, #cookie-overlay-footer, #cookie-overlay-wrapper, #cookiePane, .cookie-panel, #cookie_panel, #cookie-panel, .cookie-panel-content, .cookie-panel-overlay, #cookiePlaceholder, cookiePlaceholder, #cookie_policies, #cookie-policies, .cookie_policy, .cookie-policy, .cookiepolicy, #cookie_policy, #cookie-policy, #cookiepolicy, .cookiePolicy, #cookiePolicy, #CookiePolicy, #cookie_policy_alert, .cookie-policy-banner, #cookie-policy-banner, #cookie_policy_bar, #cookiePolicyBar, #cookiepolicybg, .cookie-policy-box, #cookie_policy_container, #cookie-policy-container, #cookiepolicyContainer, #cookiePolicyContainer, #cookie-policy-div, #cookiepolicydiv, #cookie-policy-info, #cookiePolicy-layer, .cookie_policy_message, .cookie-policy-notice, #cookie-policy-notice, #cookiePolicyNotification, #cookiePolicyPopup, .cookie-policy-statement, #cookie-policy-strap, #cookiePolicyWrapper, .cookie_popup, .cookie-popup, #cookie-popup, #cookiepopup, #cookiePopupContainer, #cookie_privacy_holder, .cookie_privacy_info_bar, #cookie_privacy_info_bar, #cookie_privacy_popup, #cookiePrompt, #cookiePromptWrapper, #CookieQBanner, #cookiereports-badge, #CookieReportsButton, #cookies, #cookiesAdvertise, #cookies-agreement-box, .cookies-alert, .cookiesAlert, #cookiesAllow, #cookies_apla, #CookiesAreBeingUsed, #cookiesArticle, .cookies-banner, #cookies_banner, #cookies-banner, #cookiesBanner, #cookies-bar, #cookiesBar, #cookies_box, #cookies_container, .cookiesContent, #cookiescript_injected, .cookies-dialog, #cookiesdirective, #cookies_disclaimer, #cookiesdisclaimer, #cookiesDisclaimer, #CookieSettings, #cookies-fancybox, #cookieshit, #cookies_in, .cookies-info, .cookiesinfo, #cookies_info, #cookies-info, .cookiesInfo, #cookiesInfo, #cookies-info-banner, #cookies_information, #cookies-information, #cookiesInitialDialog, #cookieslaw, #cookiesLequipe, #cookies_message, #cookies-message, .cookiesMessageBanner, #cookies-modal, #cookies_msg, .cookies-notification, #cookies_notifier, #cookies_notify, .cookies-overlay, #cookies-overlay, #cookies-panel, #cookiesPanel, .cookies-policy, .cookiespolicy, #cookies_policy, #cookies-policy, #cookiesPolicy, #cookies-policy-container, #cookiesPolicyPopup, #cookies-policy-prompt, #cookies-policy-wrapper, #cookiesPop, .cookies-popup, #cookies-popup, #cookiesPopup, #cookies-privacy, .cookiesPro, #cookiesribbon, #cookiestatement, #cookies-verify, .cookies-warning, #cookies_warning, .cookiesWarning, #cookiesWarning, #cookiesWarningActive, #cookiesWarningBanner, #cookies-warning-box, #cookiesWrapper, #cookietable, #cookieTerms, #cookietext, #cookieTime, .cookieTooltip, .cookieTooltipKontener, #cookie-ue, #cookieu_header, #cookieuseage, #cookieView, #cookie-warn, #cookiewarn, #cookieWarn, .cookie_warning, .cookie-warning, #cookie_warning, #cookie-warning, #cookiewarning, .cookieWarning, #cookieWarning, #cookie-warning-bar, .cookieWarningBox, #cookieWarningBox, #cookieWarningDiv, #cookie_widget, .cookie-wr, .cookieWrap, .cookie-wrapper, .cookiewrapper, #cookieWrapper, #CRTL_AlertCookie, #ctl00_cookieconsent_ajaxPanel, #ctl00_CookieMessage1_divCookie, #ctl00_CookieMessage1_upCookie, #ctl00_Cookies_CookieContainer, #ctl00_ctl00_cookieDiv, #ctl00_ctl00_divCookiePolicyContainer, #ctl30_pnlCookie, #cw-cookieInfo, .cwcookielaw, .delayed-module.alert-cookie.alert, #dennis-cookie-notice, #desktop-cookie-disclosure, .divascookies, #divCookie, .divCookiePopUp, .divCookiePopUpContainer, #divCookies_pnlCookies, div[data-ng-controller="AcceptCookiesController"], #dnn_ctr496_View_EUcookie, #ec-cookie-messages-container, #ee-cookies-message, #epbar, #ePrivacyDisclaimer, #e-privacy-message, .epson_cookienotice, .epublishing-priority.epublishing-eu-cookies, .eucookie, #eu_cookie, #eu-cookie, #eucookie, .euCookie, #euCookie, .EUCookie, #EUCookie, #euCookieBar, #eu-cookie-bar-notification, #eu-cookie-compliance, #eu-cookie-consent, #euCookieDirective, .eucookie_disclaimer, #eu-cookie-law, #eucookielaw, #eucookielaw-in-html, #EUCookieMsg, .eu-cookie-nag, .eu-cookie-notice, #eu-cookie-notifier, #eu-cookie-notify-wrap, .EUCookiePolicyContainer, .eu-cookies, .eucookies, #eu_cookies, #eu_cookies_overlay_content, #euCookiesQuestion, #eu-cookie-wrap, #EUDirectiveCookiePanel, #fdih-cb, #foCookieNotice, #footerCk, .footer__cookie-info, #Footer_cookieLawBox, #footer-cookies, .footer-cookies-policy, #fp_cookieMessageContainer, .fucking-priority.fucking-eu-cookies, .future-cookie-bar, #future-cookie-bar, .gb_g.gb_ac.gb_gd, #gh-cookieb, gh-cookieb-active, #gld_cookie_flag, #global-cookie-message, .globalcookiepolicycontainer, #gn-cookie-accept, .gn-cookie-alert, #have-a-cookie, .headerCookie, .header-cookie-content, #headerTopBarMessageCookies, #hi-cookie-box, #h_popup, #hr_cookie_policy_message, #huk_cookie_prefernce_panel, #hw_cookie_law, #icanhascookie, #_iCD, #ico_banner, #icoCookiesBanner, #id_cookieconsent, .id-CookieConsent, #ietCookiePanel, #imPolicycookiemessage, #info_cookie_container, .infoCookies, #isCookieAccepted, #itv-cookie-notification, #itv-glob-cookie-policy, #iubenda-cs-banner, #jlp-cookie-container, .jobnotice_cnt, #jquery-cookie-law-script, .js-cookie-compliance, .js-cookie-consent, .js-cookie-container, .js-cookie-disclaimer, .js-cookie-notice, .js-cookie-policy, #js_popup_cookies.belka-cookies, #js_pushDownCookieMessage, .js-toast-cookies.js-component-toast.component-toast, #kuki, #layer_cookie, #lca-cookie-notification, #lc_cookies-main, #LoggingCookie, #message-bar-cookie-notice, message-bar-cookie-notice, #mktg_Cookie_Wrap, #mmmmm-cookies, #modal_cookie-mask, #mrw_cookielaw_banner, #myCookie, #norm_cookies, .notice-cookie, .notice_notice_cookies, #npo_cc_notification, #npo_cc_notification_wrapper, #nq_cnilbanner, #nuk-cookieMessage, #obvestilo-piskotki, #obvstilo-piskotki, #okcookies, .om-cookie-agreement, .ow_cookie, #ow_cookie, .panel_cookie, .pea_cook_wrapper, #permission-bar, .pf-cookie-directive, #piskotki, #Piskotki, #Piskotki1_PiskotekForma, #piskotki_obvestilo, #piskotOpozorilo, #pl_cookies, #plea, #plugin_cookie_int, #pm13_cookie_info, #pnlCookieBanner, #pnlCookieWarning, #policy-banner, #policyNotice, #politicaCookies, .polityka-cookie, #polityka-cookies, .popup-cookie, #popup-cookie, #popup-cookies, .printNone.usermsgCookie, #PrivacyBanner, .privacyhint, #privacyPolicyLayerN, #pronamic_cookie_holder, .qb-cookielaw-bar, #rbiCookiePolicy_pushDownBoxWrapper, .regional-cookie-warning, .roh-cookies, #Row1_Column1_Cell1_CookieSettings_CookieSettings, #rtl_cookie_small, #scc-consent, .sd_cookiespolicy, .sgsCookies, #site-cookie-policy, #SiteMasterPage_updCookieDisclaimer, .site-message--cookies.site-message--banner.js-site-message.site-message, #site-we-use-cookies, #site-wide-cookie-message, #skycom-cookie-wrapper, #sliding-popup, #stdCookie, .storm-cookie, #sun-cookieMessage, #svtCookieInformationContainer, #sxc_confirmation, .sys_cc-cookies, #tesco_cookie_widget, #thecookie, #theCookie, #TNTpageContentPlaceHolder_pnlCookieMessage, .toast-type-newCookie, #top-notification-bar-container, .tsAttention--Info--button, #tto-cookieMessage, #twCookieConsent, #uecookies, .uk-cookie-banner, .uk-cookies, #usrConsent, #viewlet-cookiepolicy, #warning_cookie, #website-cookies, #widget-vrtcookiebalk, #wk_cookiebar, #wk_cookies, #wpca-bar, #WP-cookie-info, .wrapper--cookies, #ww-cookie-information {' + dni + '}');
})(opera);
