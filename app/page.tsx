import connectToDB from "./_configs/database";

export default async function HomePage() {
  await connectToDB();
  return (
    <div className="font-ir">
     
    </div>
  );
}
