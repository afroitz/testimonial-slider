!function(){"use strict";var e,t={909:function(){var e=window.wp.blocks,t=window.wp.element,n=window.wp.blockEditor,r=window.wp.data;window.wp.i18n,(0,e.registerBlockType)("create-block/bw-testimonial-slider",{edit:function(e){const{clientId:o}=e,{hasChildBlocks:s}=(0,r.useSelect)((e=>{const{getBlockOrder:t}=e(n.store);return{hasChildBlocks:t(o).length>0}}),[o]),c=(0,n.useBlockProps)({className:"bw-ts--wrapper"}),l=(0,n.__experimentalUseInnerBlocksProps)({},{allowedBlocks:["core/quote"],renderAppender:s?void 0:n.InnerBlocks.ButtonBlockAppender});return(0,t.createElement)("div",c,(0,t.createElement)("div",l))},save:function(e){const r=n.useBlockProps.save({className:"bw-ts--wrapper"});return(0,t.createElement)("div",r,(0,t.createElement)("div",{className:"bw-ts--control-container bw-ts--left"},(0,t.createElement)("button",{className:"bw-ts--control"},(0,t.createElement)("i",{className:"fas fa-chevron-left"}))),(0,t.createElement)("div",{className:"bw-ts--slides-container"},(0,t.createElement)(n.InnerBlocks.Content,null)),(0,t.createElement)("div",{className:"bw-ts--control-container bw-ts--right"},(0,t.createElement)("button",{className:"bw-ts--control"},(0,t.createElement)("i",{className:"fas fa-chevron-right"}))))}})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,r),s.exports}r.m=t,e=[],r.O=function(t,n,o,s){if(!n){var c=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],s=e[u][2];for(var l=!0,a=0;a<n.length;a++)(!1&s||c>=s)&&Object.keys(r.O).every((function(e){return r.O[e](n[a])}))?n.splice(a--,1):(l=!1,s<c&&(c=s));if(l){e.splice(u--,1);var i=o();void 0!==i&&(t=i)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,o,s]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,46:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,s,c=n[0],l=n[1],a=n[2],i=0;if(c.some((function(t){return 0!==e[t]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(a)var u=a(r)}for(t&&t(n);i<c.length;i++)s=c[i],r.o(e,s)&&e[s]&&e[s][0](),e[c[i]]=0;return r.O(u)},n=self.webpackChunkbw_testimonial_slider=self.webpackChunkbw_testimonial_slider||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[46],(function(){return r(909)}));o=r.O(o)}();