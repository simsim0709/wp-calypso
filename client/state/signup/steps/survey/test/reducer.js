/**
 * External dependencies
 */
import { expect } from 'chai';

/**
 * Internal dependencies
 */
import {
	SIGNUP_STEPS_SURVEY_SET,
	SIGNUP_COMPLETE_RESET,
} from 'state/action-types';

import signupSurveyReducer from '../reducer';

describe( 'reducer', () => {
	it( 'should update the survey', () => {
		expect( signupSurveyReducer( {}, {
			type: SIGNUP_STEPS_SURVEY_SET,
			survey: {
				vertical: 'test-survey',
				otherText: 'test-other-text'
			}
		} ) ).to.be.eql( {
			vertical: 'test-survey',
			otherText: 'test-other-text'
		} );
	} );

	it( 'should reset the survey on signup complete', () => {
		expect( signupSurveyReducer(
			{
				vertical: 'test-survey',
				otherText: 'test-other-text'
			},
			{
				type: SIGNUP_COMPLETE_RESET,
				action: {}
			}
		) ).to.be.eql( {} );
	} );
} );
