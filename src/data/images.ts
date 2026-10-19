// Official AES imagery (aesenergy.com.tr), served from CDN pointers.
import img_about from "@/assets/aes/about.jpg.asset.json";
import img_aesLightingProducts from "@/assets/aes/aes-lighting-products.jpg.asset.json";
import img_batteryRectifierManagement from "@/assets/aes/battery-rectifier-management.png.asset.json";
import img_catOmniasset from "@/assets/aes/cat-omniasset.jpg.asset.json";
import img_catOmnidetect from "@/assets/aes/cat-omnidetect.jpg.asset.json";
import img_catOmnigrid from "@/assets/aes/cat-omnigrid.jpg.asset.json";
import img_catOmnisafe from "@/assets/aes/cat-omnisafe.png.asset.json";
import img_catOtherProducts from "@/assets/aes/cat-other-products.png.asset.json";
import img_corrosionInhibitor from "@/assets/aes/corrosion-inhibitor.jpg.asset.json";
import img_cta from "@/assets/aes/cta.jpg.asset.json";
import img_demandControlDevice from "@/assets/aes/demand-control-device.jpg.asset.json";
import img_hero from "@/assets/aes/hero.jpg.asset.json";
import img_insulatorCover from "@/assets/aes/insulator-cover.jpg.asset.json";
import img_logo from "@/assets/aes/logo.png.asset.json";
import img_lvScada from "@/assets/aes/lv-scada.jpg.asset.json";
import img_meterTestBench from "@/assets/aes/meter-test-bench.png.asset.json";
import img_microCapsuleFireBarrier from "@/assets/aes/micro-capsule-fire-barrier.jpg.asset.json";
import img_overheadLineMonitoring from "@/assets/aes/overhead-line-monitoring.png.asset.json";
import img_personalVoltageDetector from "@/assets/aes/personal-voltage-detector.png.asset.json";
import img_polymerAxialLightingPoles from "@/assets/aes/polymer-axial-lighting-poles.png.asset.json";
import img_polymericMvFuse from "@/assets/aes/polymeric-mv-fuse.png.asset.json";
import img_quality from "@/assets/aes/quality.webp.asset.json";
import img_realTimeIceLoadMeter from "@/assets/aes/real-time-ice-load-meter.jpg.asset.json";
import img_regionalElectricFieldDetector from "@/assets/aes/regional-electric-field-detector.png.asset.json";
import img_sagMeasurementDevice from "@/assets/aes/sag-measurement-device.jpg.asset.json";
import img_smartBushing from "@/assets/aes/smart-bushing.jpg.asset.json";
import img_thermochromicCableClips from "@/assets/aes/thermochromic-cable-clips.jpg.asset.json";
import img_vlfTestSystem from "@/assets/aes/vlf-test-system.png.asset.json";

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
import img_pIzo from "@/assets/aes/partner-izoelektro.svg.asset.json";
import img_pGw from "@/assets/aes/partner-greenwood.svg.asset.json";
import img_pVic from "@/assets/aes/partner-vicentinos.png.asset.json";
export const partnerLogos: Record<string, string> = { "İzoelektro": img_pIzo.url, "Greenwood Power": img_pGw.url, "Vicentinos": img_pVic.url };
