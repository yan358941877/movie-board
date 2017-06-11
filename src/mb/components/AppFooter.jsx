import React from 'react'

import '../res/AppFooter.less'
class AppFooter extends React.PureComponent{
    render(){
        return (
            <footer className="mb-app-footer">
                <div className="copyright">
                    &copy; 2016-2017 <a rel="noopener noreferrer" target="_blank" href="https://github.com/MagicCube">MagicCube</a>. Reimplemented by <a href="mailto:jhhfft@foxmail.com">Yan xin</a>.
                </div>
                <a className="github" href="https://github.com/yan358941877/movie-board">Star for me</a>
            </footer>
        )
    }
}

export default AppFooter