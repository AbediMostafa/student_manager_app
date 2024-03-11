import Swal from 'sweetalert2'

const dialogSwal = (type: any, title: any, text: any, timer = 3000) =>
    Swal.fire({
        title,
        text,
        timer,
        icon: type,
        position: "top-end",
        showConfirmButton: false
    });

const modalSwal = (type: any, title: any, html: any) => Swal.fire({icon: type, title, html});


export {dialogSwal, modalSwal}