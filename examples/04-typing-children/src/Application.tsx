/**
 * Things you could try:
 *
 * JSX.Element;
 * JSX.Element | JSX.Element[];
 * React.ReactNode;
 * React.ReactChildren;
 * React.ReactChild[];
 */

// ReactNode satisfies all the conditions
// NOTE: check squiggly lines here from typescript
// as well as the rendered view which shows the errors
// a string or an html element, or a component
// which will evenutally be an html element, etc

import * as React from 'react';

 type BoxProps = {
   children: React.ReactNode
};

 const Box = ({ children }: BoxProps) => {
  console.log('children: ', children);
   console.log('typeof(children): ', typeof(children));

   if (Array.isArray(children)) {
     console.log('children are arrays');
   }

   if (!Array.isArray(children) && typeof children === 'object') {
    console.log('my children are an object but not arrays');
  }

  // console.log('children: ', children);
  //  console.log('children.props: ', children.props);
  //  console.log('children.props.type: ', children.props.type);
   return (
     <section style={{ padding: "1em", border: "5px solid purple" }}>
       {children}
     </section>
   );
 };

 export default function Application() {
   return (
     <Box>
       Just a string.
       <p>Some HTML that is not nested.</p>
       <Box>
         <h2>Another React component with one child.</h2>
       </Box>
       <Box>
         <h2>A nested React component with two children.</h2>
         <p>The second child.</p>
       </Box>
     </Box>
   );
 }
