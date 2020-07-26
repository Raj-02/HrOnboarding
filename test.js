/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_873a99923053431591dac157dfaa6cf2(ctx) {
    var ms_outHtml=[];
    var cachePreviousTemplateData = ctx['DisplayTemplateData'];
    ctx['DisplayTemplateData'] = new Object();
    DisplayTemplate_873a99923053431591dac157dfaa6cf2.DisplayTemplateData = ctx['DisplayTemplateData'];
  
    ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fCertainTeed_Item_NewsEvents.js';
    ctx['DisplayTemplateData']['TemplateType']='Item';
    ctx['DisplayTemplateData']['TargetControlType']=['SearchResults'];
    this.DisplayTemplateData = ctx['DisplayTemplateData'];
  
    ctx['DisplayTemplateData']['ManagedPropertyMapping']={'Title':['Title'], 'Path':['Path'], 'Description':['Description'], 'BodyOWSMTXT':['BodyOWSMTXT'], 'ctExpiresDate':['ctExpiresDate'], 'ctEndDateTime':['ctEndDateTime'], 'ctStartDateTime':['ctStartDateTime'], 'ctSortDate':['ctSortDate'], 'CategoryOWSCHCS':['CategoryOWSCHCS'], 'FileExtension':['FileExtension'], 'ViewsLifeTime':['ViewsLifeTime'], 'ParentLink':['ParentLink'], 'FileType':['FileType'], 'IsContainer':['IsContainer'], 'SecondaryFileExtension':['SecondaryFileExtension'], 'DisplayAuthor':['DisplayAuthor'], 'ContentType':['ContentType'], 'ctAllDayEvent':['ctAllDayEvent']};
    var cachePreviousItemValuesFunction = ctx['ItemValues'];
    ctx['ItemValues'] = function(slotOrPropName) {
      return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
  };
  
  ms_outHtml.push('',''
  ); 
          if(!$isNull(ctx.CurrentItem) && !$isNull(ctx.ClientControl)){
              var id = ctx.ClientControl.get_nextUniqueId();
              var itemId = id + Srch.U.Ids.item;
              var currentItemIdx = ctx.CurrentItemIdx + 1;
              var lastItemIdx = ctx.CurrentGroup.RowCount;
              var itemPath = ctx.CurrentItem.Path;
              
              var ContentType = ctx.CurrentItem.ContentType;
              var Title = ctx.CurrentItem.Title;
              var AnnouncementBodyText = ctx.CurrentItem.BodyOWSMTXT;
              var EventDescription = ctx.CurrentItem.Description;
              var EventStartDateTime = ctx.CurrentItem.ctStartDateTime;
              var EventEndDateTime = ctx.CurrentItem.ctEndDateTime;
              var AnnouncementExpiresDate = ctx.CurrentItem.ctExpiresDate;
              var EventAnnouncementSortDate = ctx.CurrentItem.ctSortDate;//update
              var Category = ctx.CurrentItem.CategoryOWSCHCS;
              var url = _spPageContextInfo.siteAbsoluteUrl;
              var allDayEvent = ctx.CurrentItem.ctAllDayEvent;
              var url = _spPageContextInfo.siteAbsoluteUrl;
              
               // Remove html from string using jQuery .text() function.
               AnnouncementBodyText = AnnouncementBodyText != null ? jQuery(AnnouncementBodyText).text() : "";
               EventDescription = EventDescription != null ? jQuery(EventDescription).text() : "";
               
               // Limit of characters in a string.
               var stringCharLimit = 100;
               
               // Check string lengths and trim if necessary.
               if(AnnouncementBodyText.length > stringCharLimit) {
                   AnnouncementBodyText = AnnouncementBodyText.substr(0,stringCharLimit)+'...';
               }
               if(EventDescription.length > stringCharLimit) {
                   EventDescription = EventDescription.substr(0,stringCharLimit)+'...';
               }
  
              
              // Get day and month from the date fields.
              var EventStartDayNum = "";
              var EventStartMo = "";
              var EventStartMoDay = "";
              var EventStartTime = "";
              var AnnouncementExpireDayNum = "";
              var AnnouncementExpireMo = "";
              
              if(moment(EventStartDateTime).isValid()) {
                  EventStartDayNum = moment(EventStartDateTime).format("DD");
                  EventStartMo = moment(EventStartDateTime).format("MMM");
                  EventStartMoDay = moment(EventStartDateTime).format("dddd")+',';
                  EventStartTime =  moment(EventStartDateTime).format("hh:mm A");
  
                  if(allDayEvent == "1"){					
                      EventStartTime  = "12:00 AM"	
                  }
                  
              }
              if(moment(AnnouncementExpiresDate).isValid()) {
                  AnnouncementExpireDayNum = moment(AnnouncementExpiresDate).format("DD");
                  AnnouncementExpireMo = moment(AnnouncementExpiresDate).format("MMM");
              } 		
              
              // Update, using ctSortDate since it includes both EventStartDate and AnnouncementStartDate.
              var sortDateDayNum = "";
              var sortDateMo = "";
              var sortDateMoDay = "";
              var sortDateTime = "";
  
              if(moment(EventAnnouncementSortDate).isValid()) {
                  sortDateDayNum = moment(EventAnnouncementSortDate).format("DD");
                  sortDateMo = moment(EventAnnouncementSortDate).format("MMM");
                  sortDateMoDay = moment(EventAnnouncementSortDate).format("dddd")+',';
                  sortDateTime =  moment(EventAnnouncementSortDate).format("hh:mm A");
              }
  ms_outHtml.push(''
  ,'            <div id="', $htmlEncode(itemId) ,'" name="Item" data-displaytemplate="CTNewsEvents" class="ct-search-item ct-news-events">'
  ,'            	<div class="inner-container">'
  ); 
                      if(ContentType == "CertainTeed Announcement") {
  ms_outHtml.push(''
  ,'						<div class="left-container">'
  ,'							<div class="item-date-num">'
  ,'								',sortDateDayNum,''
  ,'							</div>'
  ,'							<div class="item-date-month">'
  ,'								',sortDateMo,''
  ,'							</div>'
  ,'						</div>'
  ,'						<div class="right-container">'
  ,'							<div class="top-container">'
  ,'								<div class="item-title">'
  ,'									<span class="item-icon">'
  ,'										<i class="fa fa-newspaper-o" aria-hidden="true"></i>'
  ,'									</span>'
  ,'									<a href="',itemPath,'">',Title ,'</a>'
  ,'								</div>'
  ,'                                  <div class="item-day-time">'
  ,'									<div class="icon">'
  ,'										<i class="fa fa-clock-o" aria-hidden="true"></i>'
  ,'									</div>'
  ,'									<div class="item-month-day">'
  ,'										',sortDateMoDay,''
  ,'									</div>'
  ,'									<div class="item-time">'
  ,'										',sortDateTime,''
  ,'									</div>'
  ,'								</div>'
  ,'							</div>'
  ,'							<div class="bottom-container">'
  ,'								<div class="item-text">'
  ,'									',AnnouncementBodyText,''
  ,'								</div>'
  ,'							</div>'
  ,'						</div>            '
  );		
                      } 
  ms_outHtml.push(''
  ,''
  ,''
  ); 
                      if(ContentType == "CertainTeed Event") {
  ms_outHtml.push(''
  ,'						<div class="left-container">'
  ,'							<div class="item-date-num">'
  ,'								',sortDateDayNum,''
  ,'							</div>'
  ,'							<div class="item-date-month">'
  ,'								',sortDateMo,''
  ,'							</div>'
  ,'						</div>'
  ,'						<div class="right-container">'
  ,'							<div class="top-container">'
  ,'								<div class="item-title">'
  ,'									<span>'
  ,'										<a href="',itemPath,'">',Title ,'</a>'
  ,'									</span>'
  ,'								</div>'
  ,'								<div class="item-day-time">'
  ,'									<div class="icon">'
  ,'										<i class="fa fa-clock-o" aria-hidden="true"></i>'
  ,'									</div>'
  ,'									<div class="item-month-day">'
  ,'										',sortDateMoDay,''
  ,'									</div>'
  ,'									<div class="item-time">'
  ,'										',sortDateTime,''
  ,'									</div>'
  ,'								</div>'
  ,'							</div>'
  ,'							<div class="bottom-container">'
  ,'								<div class="item-text">'
  ,'									',EventDescription,''
  ,'								</div>'
  ,'							</div>'
  ,'						</div>'
  );		
                      } 
  ms_outHtml.push(''
  ,''
  ,'				</div>'
  );		
              if(currentItemIdx == lastItemIdx && _spPageContextInfo.serverRequestPath.indexOf("NewsEvents.aspx") == -1) { 
                          
  ms_outHtml.push('			'
  ,'				<div class="view-all-events">'
  ,'					<a href="/sites/search/pages/NewsEvents.aspx?SiteUrl=',url,'">View All News &amp; Events</a>'
  ,'				</div>'
  );		
              } 
  ms_outHtml.push(''
  ,'  '
  ,'            </div>'
  ); 
          } 
  ms_outHtml.push(''
  ,'    '
  );
  
    ctx['ItemValues'] = cachePreviousItemValuesFunction;
    ctx['DisplayTemplateData'] = cachePreviousTemplateData;
    return ms_outHtml.join('');
  }
  function RegisterTemplate_873a99923053431591dac157dfaa6cf2() {
  
  if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
    Srch.U.registerRenderTemplateByName("Item_Default", DisplayTemplate_873a99923053431591dac157dfaa6cf2);
  }
  
  if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
    Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fCertainTeed_Item_NewsEvents.js", DisplayTemplate_873a99923053431591dac157dfaa6cf2);
  }
  
  }
  RegisterTemplate_873a99923053431591dac157dfaa6cf2();
  if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
    RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fCertainTeed_Item_NewsEvents.js"), RegisterTemplate_873a99923053431591dac157dfaa6cf2);
  }