var modal=document.getElementById("myModal"),body=document.getElementsByTagName("body"),container=document.getElementById("myContainer"),btnOpen=document.getElementById("session_status"),btnClose=document.getElementById("closeModal");btnOpen.onclick=function(){modal.className="Modalr is-visuallyHidden",setTimeout(function(){container.className="MainContainer is-blurred",modal.className="Modalr"},100),container.parentElement.className="ModalOpen"},btnClose.onclick=function(){modal.className="Modalr is-hidden is-visuallyHidden",body.className="",container.className="MainContainer",container.parentElement.className=""},window.onclick=function(e){e.target==modal&&(modal.className="Modalr is-hidden",body.className="",container.className="MainContainer",container.parentElement.className="")};