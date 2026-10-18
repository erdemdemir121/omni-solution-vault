// Official AES imagery (aesenergy.com.tr), served from CDN pointers.
import img_about from "./about.jpg.asset.json";
import img_aesLightingProducts from "./aes-lighting-products.jpg.asset.json";
import img_batteryRectifierManagement from "./battery-rectifier-management.png.asset.json";
import img_catOmniasset from "./cat-omniasset.jpg.asset.json";
import img_catOmnidetect from "./cat-omnidetect.jpg.asset.json";
import img_catOmnigrid from "./cat-omnigrid.jpg.asset.json";
import img_catOmnisafe from "./cat-omnisafe.png.asset.json";
import img_catOtherProducts from "./cat-other-products.png.asset.json";
import img_corrosionInhibitor from "./corrosion-inhibitor.jpg.asset.json";
import img_cta from "./cta.jpg.asset.json";
import img_demandControlDevice from "./demand-control-device.jpg.asset.json";
import img_hero from "./hero.jpg.asset.json";
import img_insulatorCover from "./insulator-cover.jpg.asset.json";
import img_logo from "./logo.png.asset.json";
import img_lvScada from "./lv-scada.jpg.asset.json";
import img_meterTestBench from "./meter-test-bench.png.asset.json";
import img_microCapsuleFireBarrier from "./micro-capsule-fire-barrier.jpg.asset.json";
import img_overheadLineMonitoring from "./overhead-line-monitoring.png.asset.json";
import img_personalVoltageDetector from "./personal-voltage-detector.png.asset.json";
import img_polymerAxialLightingPoles from "./polymer-axial-lighting-poles.png.asset.json";
import img_polymericMvFuse from "./polymeric-mv-fuse.png.asset.json";
import img_quality from "./quality.webp.asset.json";
import img_realTimeIceLoadMeter from "./real-time-ice-load-meter.jpg.asset.json";
import img_regionalElectricFieldDetector from "./regional-electric-field-detector.png.asset.json";
import img_sagMeasurementDevice from "./sag-measurement-device.jpg.asset.json";
import img_smartBushing from "./smart-bushing.jpg.asset.json";
import img_thermochromicCableClips from "./thermochromic-cable-clips.jpg.asset.json";
import img_vlfTestSystem from "./vlf-test-system.png.asset.json";

export const productImages: Record<string, string> = {
  "aes-lighting-products": img_aesLightingProducts.url,
  "battery-rectifier-management": img_batteryRectifierManagement.url,
  "corrosion-inhibitor": img_corrosionInhibitor.url,
  "demand-control-device": img_demandControlDevice.url,
  "insulator-cover": img_insulatorCover.url,
  "lv-scada": img_lvScada.url,
  "meter-test-bench": img_meterTestBench.url,
  "micro-capsule-fire-barrier": img_microCapsuleFireBarrier.url,
  "overhead-line-monitoring": img_overheadLineMonitoring.url,
  "personal-voltage-detector": img_personalVoltageDetector.url,
  "polymer-axial-lighting-poles": img_polymerAxialLightingPoles.url,
  "polymeric-mv-fuse": img_polymericMvFuse.url,
  "real-time-ice-load-meter": img_realTimeIceLoadMeter.url,
  "regional-electric-field-detector": img_regionalElectricFieldDetector.url,
  "sag-measurement-device": img_sagMeasurementDevice.url,
  "smart-bushing": img_smartBushing.url,
  "thermochromic-cable-clips": img_thermochromicCableClips.url,
  "vlf-test-system": img_vlfTestSystem.url,
};
export const categoryImages: Record<string, string> = {
  "omnigrid": img_catOmnigrid.url,
  "omnisafe": img_catOmnisafe.url,
  "omnidetect": img_catOmnidetect.url,
  "omniasset": img_catOmniasset.url,
  "other-products": img_catOtherProducts.url,
};
export const siteImages = { logo: img_logo.url, hero: img_hero.url, cta: img_cta.url, about: img_about.url, quality: img_quality.url };
