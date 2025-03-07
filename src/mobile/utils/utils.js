export const PriceDisplay = ({ price }) => {
    if(!price) return;
  const formattedPrice = price.toLocaleString('en-IN');
  return <span>{formattedPrice}</span>;
};