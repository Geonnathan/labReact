import Swal from 'sweetalert2';

export function AlertSuccessGeneric (title : any, message : any){

   Swal.fire({
      title: title,
      text: message,
      showConfirmButton: false,
      timer: 1800,
    })
}

export  function AlertError (message : any){
   Swal.fire({
      title: 'Oops...',
      text: message,
    })
}

export function ConfirmAlert(title : any) {
  const handleConfirm = async () => {
    const result = await Swal.fire({
      title: title,
      text: "Esta acción no se podrá deshacer",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, estoy seguro',
      cancelButtonText: 'Cancelar'
    });
    return result.value ? true : false;
  }
  return { handleConfirm };
}


