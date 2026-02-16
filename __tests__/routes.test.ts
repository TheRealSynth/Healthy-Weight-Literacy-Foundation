import { ROUTES, VALID_ROUTES } from "@/lib/routes"

describe("Route Validation", () => {
  it("should have all routes defined", () => {
    expect(ROUTES.HOME).toBe("/")
    expect(ROUTES.ABOUT).toBe("/about")
    expect(ROUTES.PROGRAMS).toBe("/programs")
    expect(ROUTES.EDUCATION).toBe("/education")
    expect(ROUTES.CITY_RESOURCES).toBe("/city-resources")
    expect(ROUTES.CONTACT).toBe("/contact")
    expect(ROUTES.DONATE).toBe("/donate")
  })

  it("should have valid routes array", () => {
    expect(VALID_ROUTES).toContain("/")
    expect(VALID_ROUTES).toContain("/about")
    expect(VALID_ROUTES).toContain("/programs")
    expect(VALID_ROUTES).toContain("/education")
    expect(VALID_ROUTES).toContain("/city-resources")
    expect(VALID_ROUTES).toContain("/contact")
    expect(VALID_ROUTES).toContain("/donate")
  })

  it("should not contain invalid routes", () => {
    // These are common typos or old routes that should not exist
    expect(VALID_ROUTES).not.toContain("/cityresources")
    expect(VALID_ROUTES).not.toContain("/resources") // This redirects to /city-resources
    expect(VALID_ROUTES).not.toContain("/articles") // This redirects to /education
    expect(VALID_ROUTES).not.toContain("/learn") // This redirects to /education
  })
})
