import React from "react";
import { ProductHome, AtlassianNavigation, PrimaryButton, SignIn, Search } from '@atlaskit/atlassian-navigation';
import { AtlassianIcon, AtlassianLogo } from '@atlaskit/logo';
import HomeIcon from '@atlaskit/icon/glyph/home';
import CommentIcon from '@atlaskit/icon/glyph/comment';

export default class Navigation extends React.Component {
    render() {
        return (
            <AtlassianNavigation
                label="site-nav"
                primaryItems={[
                    <PrimaryButton iconBefore={<HomeIcon size="small" label="" />} isHighlighted={true}>Home</PrimaryButton>,
                    <PrimaryButton iconBefore={<CommentIcon size="medium" label="" />}>Forum</PrimaryButton>
                ]}
                renderProductHome={
                    () => <ProductHome icon={AtlassianIcon} logo={AtlassianLogo} />
                }
                renderSignIn={
                    () => <SignIn href="#" tooltip="Sign in" />
                }
                renderSearch={NavSearch}
            />
        )
    }
}

class NavSearch extends React.Component {
    render() {
        return (
            <Search 
            label=""
            placeholder="Search..."
            tooltip=""
            value={''}
            />
        )
    }
}