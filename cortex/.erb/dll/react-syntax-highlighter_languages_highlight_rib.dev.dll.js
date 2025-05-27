/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_rib"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/rib.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/rib.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: RenderMan RIB\nAuthor: Konstantin Evdokimenko <qewerty@gmail.com>\nContributors: Shuen-Huei Guan <drake.guan@gmail.com>\nWebsite: https://renderman.pixar.com/resources/RenderMan_20/ribBinding.html\nCategory: graphics\n*/\n\nfunction rib(hljs) {\n  return {\n    name: 'RenderMan RIB',\n    keywords:\n      'ArchiveRecord AreaLightSource Atmosphere Attribute AttributeBegin AttributeEnd Basis ' +\n      'Begin Blobby Bound Clipping ClippingPlane Color ColorSamples ConcatTransform Cone ' +\n      'CoordinateSystem CoordSysTransform CropWindow Curves Cylinder DepthOfField Detail ' +\n      'DetailRange Disk Displacement Display End ErrorHandler Exposure Exterior Format ' +\n      'FrameAspectRatio FrameBegin FrameEnd GeneralPolygon GeometricApproximation Geometry ' +\n      'Hider Hyperboloid Identity Illuminate Imager Interior LightSource ' +\n      'MakeCubeFaceEnvironment MakeLatLongEnvironment MakeShadow MakeTexture Matte ' +\n      'MotionBegin MotionEnd NuPatch ObjectBegin ObjectEnd ObjectInstance Opacity Option ' +\n      'Orientation Paraboloid Patch PatchMesh Perspective PixelFilter PixelSamples ' +\n      'PixelVariance Points PointsGeneralPolygons PointsPolygons Polygon Procedural Projection ' +\n      'Quantize ReadArchive RelativeDetail ReverseOrientation Rotate Scale ScreenWindow ' +\n      'ShadingInterpolation ShadingRate Shutter Sides Skew SolidBegin SolidEnd Sphere ' +\n      'SubdivisionMesh Surface TextureCoordinates Torus Transform TransformBegin TransformEnd ' +\n      'TransformPoints Translate TrimCurve WorldBegin WorldEnd',\n    illegal: '</',\n    contains: [\n      hljs.HASH_COMMENT_MODE,\n      hljs.C_NUMBER_MODE,\n      hljs.APOS_STRING_MODE,\n      hljs.QUOTE_STRING_MODE\n    ]\n  };\n}\n\nmodule.exports = rib;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/rib.js?");

/***/ })

}]);