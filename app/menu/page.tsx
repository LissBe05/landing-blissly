// app/menu/page.tsx
'use client';

import FeatureDish from '../components/FeatureDish';
import DishCard from '../components/DishCard';

export default function MenuPage() {
  return (
    <section className="pt-24 px-10 py-16 bg-red-50 scroll-mt-24">
      <h2 className="text-3xl font-bold text-center mb-12">Notre Menu</h2>

      {/* Conteneur Flexbox pour aligner les plats vedettes */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-16">
        {/* Plat vedette 1 */}
        <FeatureDish
          image="/noodles.jpg"
          name="Delicious Spicy Beef Noodles"
          description="Tender beef with spicy homemade sauce served with fresh noodles."
          price={29.99}
        />

        {/* Plat vedette 2 */}
        <FeatureDish
          image="/plat2.jpg"
          name="Delicious Steak"
          description="Tender steak with spicy homemade sauce."
          price={80}
        />
      </div>

      {/* Autres plats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <DishCard
          image="/salad.jpg"
          name="Fresh and Healthy Salad"
          calories={50}
          price={20}
        />
        <DishCard
          image="/smoothie.jpg"
          name="Healthy Fruit Smoothie"
          calories={70}
          price={25}
        />
        <DishCard
          image="/vin.jpg"
          name="Vin"
          calories={90}
          price={35}
        />
        <DishCard
          image="/Dinde.jpg"
          name="Dinde qu grille"
          calories={110}
          price={30}
        />
        <DishCard
          image="/Jus.jpg"
          name="Jus naturel"
          calories={85}
          price={10}
        />
        <DishCard
          image="/dessert.jpg"
          name="fraise Cake"
          calories={60}
          price={18}
        />
      </div>
    </section>
  );
}