import {Icon} from "@iconify/react"
import Swal from "sweetalert2"

interface IRowDelete {
  slug: string, 
  deleteHandler(slug:string): Promise<void>
}

export default function RowDelete({slug,deleteHandler}: Readonly<IRowDelete>) {
  const confirmAndCallDelete = async () => {
    
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmed.isConfirmed) {
      deleteHandler(slug);
    }
  }
  return (
    <button
      onClick={confirmAndCallDelete}
      className="size-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-800 transition hover:scale-98 duration-300 cursor-pointer"
    >
      <Icon icon={"lucide:trash"} className="text-white size-3" />
    </button>
  );
}