
import { verifyRequiredFields } from './index'

describe("Validation middleware", () => {
  test("data should have all required fields", async () => {
    const requiredFields = ['email', 'isConfirmed']

    const data = {
		"isConfirmed": 'sim',
		"email": "gatito.fernandes@gmail.com",
		"fianceId": "345"
	}

    const {hasRequiredKeys, missingRequired} = verifyRequiredFields(data, requiredFields)
    
    expect(hasRequiredKeys).toBeTruthy()
    expect(missingRequired).toEqual([])
  });

  test("data should miss required fields", async () => {
    const requiredFields = ['email', 'isConfirmed']

    const data = {
		"email": "gatito.fernandes@gmail.com",
		"fianceId": "345"
	}

    const {hasRequiredKeys, missingRequired} = verifyRequiredFields(data, requiredFields)

    expect(hasRequiredKeys).toBeFalsy()
    expect(missingRequired).toEqual(['isConfirmed'])
  });
});