"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2314],{9055:function(e,t,n){n.r(t),n.d(t,{ChatItem:function(){return x},ChatList:function(){return p}});var a=n(9268),s=n(9862),c=n(5932),i=n.n(c),l=n(2223),r=n(329),d=n(1503),o=n(7005),h=n(946),m=n(2795),u=n(6006);function x(e){let t=(0,u.useRef)(null);return(0,u.useEffect)(()=>{if(e.selected&&t.current){var n;null===(n=t.current)||void 0===n||n.scrollIntoView({block:"center"})}},[e.selected]),(0,a.jsx)(l._l,{draggableId:"".concat(e.id),index:e.index,children:n=>(0,a.jsxs)("div",{className:"".concat(i()["chat-item"]," ").concat(e.selected&&i()["chat-item-selected"]),onClick:e.onClick,ref:e=>{t.current=e,n.innerRef(e)},...n.draggableProps,...n.dragHandleProps,title:"".concat(e.title,"\n").concat(d.ZP.ChatItem.ChatItemCount(e.count)),children:[e.narrow?(0,a.jsxs)("div",{className:i()["chat-item-narrow"],children:[(0,a.jsx)("div",{className:i()["chat-item-avatar"]+" no-dark",children:(0,a.jsx)(m.MaskAvatar,{mask:e.mask})}),(0,a.jsx)("div",{className:i()["chat-item-narrow-count"],children:e.count})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:i()["chat-item-title"],children:e.title}),(0,a.jsxs)("div",{className:i()["chat-item-info"],children:[(0,a.jsx)("div",{className:i()["chat-item-count"],children:d.ZP.ChatItem.ChatItemCount(e.count)}),(0,a.jsx)("div",{className:i()["chat-item-date"],children:e.time})]})]}),(0,a.jsx)("div",{className:i()["chat-item-delete"],onClickCapture:e.onDelete,children:(0,a.jsx)(s.Z,{})})]})})}function p(e){let[t,n,s,c]=(0,r.aK)(e=>[e.sessions,e.currentSessionIndex,e.selectSession,e.moveSession]),m=(0,r.aK)(),u=(0,o.s0)();return(0,a.jsx)(l.Z5,{onDragEnd:e=>{let{destination:t,source:n}=e;t&&(t.droppableId!==n.droppableId||t.index!==n.index)&&c(n.index,t.index)},children:(0,a.jsx)(l.bK,{droppableId:"chat-list",children:c=>(0,a.jsxs)("div",{className:i()["chat-list"],ref:c.innerRef,...c.droppableProps,children:[t.map((t,c)=>(0,a.jsx)(x,{title:t.topic,time:new Date(t.lastUpdate).toLocaleString(),count:t.messages.length,id:t.id,index:c,selected:c===n,onClick:()=>{u(h.y$.Chat),s(c)},onDelete:()=>{(!e.narrow||confirm(d.ZP.Home.DeleteChat))&&m.deleteSession(c)},narrow:e.narrow,mask:t.mask},t.id)),c.placeholder]})})})}}}]);