const {
    validateEmail,
    validateUrls,
    findUrls
} = require('./regexp');

describe('validateEmail', () => {
    it('should return true for a valid email address', () => {
        expect(validateEmail('test@example.com')).toBe(true);
    });

    it('should return false for an invalid email address', () => {
        expect(validateEmail('invalidemail')).toBe(false);
    });

    it('should return false for an email address without a domain', () => {
        expect(validateEmail('user@domain')).toBe(false);
    });
});

describe('validateUrls', () => {
    it('should return true for a valid URL', () => {
        expect(validateUrls('https://www.example.com')).toBe(true);
    });

    it('should return false for an invalid URL', () => {
        expect(validateUrls('http://www.invalid')).toBe(false);
    });

    it('should return true for a valid URL with a different domain extension', () => {
        expect(validateUrls('https://www.website.org')).toBe(true);
    });
});

describe('findUrls', () => {
    it('should return an array of valid URLs in the input string', () => {
        const webpageHTML = `
      <html>
        <body>
          <a href="https://www.example.com">Link 1</a>
          <a href="http://www.invalid">Link 2</a>
          <a href="https://www.website.org">Link 3</a>
        </body>
      </html>
    `;
        expect(findUrls(webpageHTML)).toEqual([
            'https://www.example.com',
            'https://www.website.org'
        ]);
    });

    it('should return an empty array if no valid URLs are found in the input string', () => {
        const text = 'This is a sample text without any URLs.';
        expect(findUrls(text)).toEqual([]);
    });
});
