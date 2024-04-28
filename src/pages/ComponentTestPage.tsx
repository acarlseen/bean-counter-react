import { BeanTable } from "../components/BeanTable";
import { useGetPortfolio } from "../custom-hooks/getPortfolio";

export default function ComponentTestPage() {
  const { portfolioData, setPortfolioData } = useGetPortfolio();

  //console.log(portfolioData);
  
  return (
    <div>
      <BeanTable beanList={portfolioData} />
    </div>
  )
}
