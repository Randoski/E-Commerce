<template>
  <div>
    <div class="mx-auto max-w-2xl px-4 py-24 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Products</h2>

      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <router-link
          v-for="product in products"
          :key="product.id"
          to="product"
          class="group"
        >
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              :src="product.imageSrc"
              :alt="product.imageAlt"
              class="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Earthen Bottle",
          price: "$48",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
          imageAlt:
            "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
        },
        {
          id: 2,
          name: "Nomad Tumbler",
          price: "$35",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
          imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
        },
        {
          id: 3,
          name: "Focus Paper Refill",
          price: "$89",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
          imageAlt:
            "Person using a pen to cross a task off a productivity paper card.",
        },
        {
          id: 4,
          name: "Machined Mechanical Pencil",
          price: "$35",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
          imageAlt:
            "Hand holding black machined steel mechanical pencil with brass tip and top.",
        },
      ],
    };
  },
};
</script>
