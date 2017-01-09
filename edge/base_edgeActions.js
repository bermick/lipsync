/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         if(parent.window.frames[window.name].name != "com"){
         	sym.stop();
         } 

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'GRPH_finslide'
   (function(symbolName) {   
   
   })("GRPH_finslide");
   //Edge symbol end:'GRPH_finslide'

   //=========================================================
   
   //Edge symbol: 'botonAudio'
   (function(symbolName) {   
   
   })("botonAudio");
   //Edge symbol end:'botonAudio'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-943959449");