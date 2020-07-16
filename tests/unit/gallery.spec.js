import { mount } from "@vue/test-utils";
import results from "./mock_image_results.json";
import Gallery from "../../src/components/Gallery.vue";
import Thumbnail from "../../src/components/Thumbnail.vue";
import ThumbnailOverlay from "../../src/components/ThumbnailOverlay.vue";

const wrapper = mount(Gallery, {
  propsData: {
    photos: results
  }
});

describe("Gallery.vue", () => {
  it("renders a Vue instance", async() => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("renders 10 thumbnail images", async() => {
    expect(wrapper.findAllComponents(Thumbnail).length).toEqual(10);
  });

  it("renders 10 thumbnail overlays", async() => {
    expect(wrapper.findAllComponents(ThumbnailOverlay).length).toEqual(10);
  });
});
