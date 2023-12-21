import Categories from "@/components/Categories/Categories";
import MainBanner from "@/components/MainBanner/MainBanner";
import cl from "./page.module.scss";
import VehicleSlider from "@/components/VehicleSlider/VehicleSlider";
import PageHeading from "@/components/PageHeading/PageHeading";

export default function Home() {
  return (
    <div className={cl.wrapper}>
      <MainBanner />
      <div className="content_wrap">
        <div className="section_wrap">
          <PageHeading
            title="Latest Car Rental Offers in Dubai"
            subtitle=" Choose among cars with in-demand driving features and high
              mileage, and rent a car at the best price. Exclusive car rental
              discounts, updated seasonally!"
          />
          <Categories />
        </div>

        <div className="section_wrap">
          <PageHeading
            title="Latest Car Rental Offers in Dubai"
            subtitle="Choose among cars with in-demand driving features and high
              mileage, and rent a car at the best price. Exclusive car rental
              discounts, updated seasonally!"
          />
          <VehicleSlider />
        </div>

        <div className="section_wrap">
          <PageHeading
            title="Luxury & Sports Cars"
            subtitle="Drive in style! Make your first car rental a great experience with
              luxury rental vehicles from top brands such as Rolls Royce, BMW,
              Land Rover, among others."
          />

          <VehicleSlider />
        </div>
        <div className="section_wrap">
          <PageHeading
            title="SUVs for rent in Dubai"
            subtitle="From spacious 7-seaters to the latest 5-seater sports utility
              vehicles, we feature a broad range of trendy SUV car rental deals
              in the UAE."
          />
          <VehicleSlider />
        </div>
        <div className="section_wrap">
          <PageHeading
            title="Chauffeur Service in Dubai"
            subtitle="Our luxury chauffeur services include Point to Point, Airport
              Transfer and Hourly basis, provided by our hand-picked and
              exclusive partners."
          />
          <VehicleSlider />
        </div>
      </div>
    </div>
  );
}
