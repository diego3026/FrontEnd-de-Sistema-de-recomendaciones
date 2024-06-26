import Swal from 'sweetalert2';

export default function AlertExito({ message }:{message:any}) {
  return (
    Swal.fire({
      title: 'Exitoso',
      text: message,
      icon: 'success',
      confirmButtonText: 'ok'
    })
  );
}