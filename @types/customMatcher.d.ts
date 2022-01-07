declare global{
    namespace jest{
        interface Matchers<R>{
            toBeAwesome():CustomMatcherResult;
        }
    }
}
export {}