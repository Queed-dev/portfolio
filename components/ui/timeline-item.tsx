export default function TimelineItem({ fonction, town, responsibilities }: { 
    fonction: string; town: string; responsibilities: string[]; 
}) {
  return (<>
        <h1 className="text-2xl font-semibold pt-4 pb-2">{fonction}</h1>
        <h2 className="text-lg font-semibold py-2 text-neutral-300">{town}</h2>
        <ul>
            {responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
            ))}
        </ul>
    </>);
}