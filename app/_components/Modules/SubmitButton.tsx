

const SubmitButton = ({ isLoading, text }: { isLoading: boolean, text: string }) => {
    return (
        <input type="submit" value={isLoading ? "لطفا صبر کن ..." : text} disabled={isLoading} className="bg-green rounded-xl font-mo py-3 text-white text-sm w-32 cursor-pointer disabled:cursor-not-allowed" />
    )
}

export default SubmitButton