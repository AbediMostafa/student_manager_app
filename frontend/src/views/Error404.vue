<template>
  <div class="d-flex flex-column flex-center flex-column-fluid">
    <!--begin::Content-->
    <div class="d-flex flex-column flex-center text-center p-10">
      <!--begin::Wrapper-->
      <div class="card card-flush w-lg-650px py-5">
        <div class="card-body py-15 py-lg-20">
          <!--begin::Title-->
          <h1 class="fw-bolder fs-2hx text-gray-900 mb-4">Oops!</h1>
          <!--end::Title-->
          <!--begin::Text-->
          <div class="fw-semibold fs-6 text-gray-500 mb-7">
            We can't find that page.
          </div>
          <!--end::Text-->
          <!--begin::Illustration-->
          <div class="mb-3 d-flex justify-content-center">
            <img
                src="/media/404-error.png"
                class="mw-100 mh-300px"
                alt="404 error"
            />
          </div>
          <!--end::Illustration-->
          <!--begin::Link-->
          <div class="mb-0">
            <router-link to="/" class="btn btn-sm btn-primary">
              Return Home
            </router-link>
          </div>
          <!--end::Link-->
        </div>
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Content-->
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "error-404",
});
</script>
