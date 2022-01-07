expect.extend(({
    toBeAwesome(received: string) {
        const pass = received.toLocaleLowerCase().trim() === 'awesome'
        const message = pass
            ? () => `Expected ${received} to be lame, but it was awesome`
            : () => `${received} is totally not awesome`
        return {pass, message}
    }
}))