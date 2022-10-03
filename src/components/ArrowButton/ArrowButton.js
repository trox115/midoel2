function ArrowButton({isNext=true, onClick, disabled}) {
  return (
    <button className=" cursor-pointer bg-gray-300 hover:bg-gray-800 text-gray-800 hover:text-white font-bold py-2 px-4 rounded-l" disabled={ disabled } onClick={onClick}>
      { isNext ? '>' : '<'}
    </button>
  )
}
export default ArrowButton;