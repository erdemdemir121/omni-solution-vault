import asyncio
from playwright.async_api import async_playwright
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch(headless=True); pg=await b.new_page(viewport={"width":1280,"height":1800})
    errs=[]; pg.on("pageerror",lambda e:errs.append(str(e)))
    for n,u in [("home","/"),("detail","/products/omnigrid/battery-rectifier-management"),("about","/about"),("cat","/products/omnisafe")]:
      await pg.goto("http://localhost:8080"+u,wait_until="networkidle"); await pg.wait_for_timeout(800)
      await pg.screenshot(path=f"{n}.png")
    await pg.goto("http://localhost:8080/",wait_until="networkidle"); await pg.mouse.wheel(0,5000); await pg.wait_for_timeout(800); await pg.screenshot(path="home2.png")
    print(errs); await b.close()
asyncio.run(main())
